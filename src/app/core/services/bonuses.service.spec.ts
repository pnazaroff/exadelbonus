import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { asyncData, asyncError } from '../../shared/mocks/mock-async-observable';

import { IBonus } from './../interfaces/bonus.interface';
import { BonusesService } from './bonuses.service';
import { ToasterService } from './toaster.service';

describe('BonusesService (with mocks)', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let bonusesService: BonusesService;
  let toasterService: ToasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ toasterService ]
    });

    httpClient = TestBed.inject(HttpClient);
    toasterService = TestBed.inject(ToasterService);

    httpTestingController = TestBed.inject(HttpTestingController);
    bonusesService = TestBed.inject(BonusesService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('getBonuses()', () => {
  let myExpectedBonuses: IBonus[];

    beforeEach(() => {
      bonusesService = TestBed.inject(BonusesService);
    });

    
    // it('should be OK returning no bonuses', () => {
    //   bonusesService.getBonuses().subscribe(
    //     bonuses => expect(bonuses.length).toEqual(0, 'should have empty bonuses array'),
    //     fail
    //   );

    //   const req = httpTestingController.expectOne(mockForEmptyArrayBonuses);
    //   req.flush([]); 
    // });

  });

});