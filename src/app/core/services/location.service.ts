import { Injectable } from '@angular/core';
import { ToasterService } from './toaster.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ChoosePlaceDialogComponent } from '@components/choose-place-dialog/choose-place-dialog.component';
import { LatLng, latLng } from 'leaflet';
import { Observable, Subject, Subscription } from 'rxjs';
import { MapEventsService } from './map-events.service';

@Injectable()
export class LocationService {
  private subscription = new Subscription();
  private dialogRef: MatDialogRef<ChoosePlaceDialogComponent>;

  constructor(
    private toastr: ToasterService,
    private dialog: MatDialog,
    private mapEventService: MapEventsService
  ) {
    console.log(localStorage.getItem('currentLatitude'));
    if (!localStorage.getItem('currentLatitude')){
      this.selectPlaceDialog();
    }
  }

  public selectPlaceDialog(): void {
    this.dialogRef = this.dialog.open(ChoosePlaceDialogComponent);
    this.subscription.add(
      this.dialogRef.afterClosed().subscribe((location: LatLng) => this.setPosition(location))
    );
  }

  private setPosition(location: LatLng): void{
    if (location){
      this.saveToStorage(location);
      this.mapEventService.setMapView(location);
      return;
    }
    this.getUserLocation().subscribe(geolocation => {
      this.saveToStorage(geolocation);
      this.mapEventService.setMapView(geolocation);
    });
  }

  private saveToStorage(location: LatLng): void {
    localStorage.setItem('currentLatitude', location.lat.toString());
    localStorage.setItem('currentLongitude', location.lng.toString());
  }

  private getUserLocation(): Observable<LatLng> {
    return new Observable((observer) => {
      const options = {
        enableHighAccuracy: false,
        timeout: 15000,
        maximumAge: 0,
      };
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const location: LatLng = latLng(position.coords.latitude, position.coords.longitude);
            observer.next(location);
          },
          (error) => {
            observer.error(error);
          },
          options,
        );
      } else {
        this.toastr.showError('Geolocation not available', 'Error');
      }
    });
  }
}
