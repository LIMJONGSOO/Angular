import { TestBed } from '@angular/core/testing';

import { ClassProviderServiceService } from './class-provider-service.service';

describe('ClassProviderServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassProviderServiceService = TestBed.get(ClassProviderServiceService);
    expect(service).toBeTruthy();
  });
});
