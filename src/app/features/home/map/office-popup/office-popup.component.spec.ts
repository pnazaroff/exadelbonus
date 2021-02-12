import { TranslateModule } from '@ngx-translate/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficePopupComponent } from './office-popup.component';

describe('OfficePopupComponent', () => {
  let component: OfficePopupComponent;
  let fixture: ComponentFixture<OfficePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfficePopupComponent],
      imports: [TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficePopupComponent);
    component = fixture.componentInstance;
    component.office = {
      id: '123',
      country: 'country',
      city: 'city',
      address: 'address',
      latitude: 123,
      longitude: 321,
      number: '234',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});