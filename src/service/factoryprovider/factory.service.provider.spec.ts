import { TestBed } from '@angular/core/testing';

import { FactoryProviderServiceService } from './factory-provider-service.service';

describe('FactoryProviderServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FactoryProviderServiceService = TestBed.get(FactoryProviderServiceService);
    expect(service).toBeTruthy();
  });
});
