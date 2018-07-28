import { TestBed, inject } from '@angular/core/testing';

import { PredictabilityDataService } from './predictability-data.service';

describe('PredictabilityDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PredictabilityDataService]
    });
  });

  it('should be created', inject([PredictabilityDataService], (service: PredictabilityDataService) => {
    expect(service).toBeTruthy();
  }));
});
