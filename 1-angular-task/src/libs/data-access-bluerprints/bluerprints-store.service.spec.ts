import { TestBed } from '@angular/core/testing';

import { BluerprintsStoreService } from './bluerprints-store.service';

describe('BluerprintsStoreService', () => {
  let service: BluerprintsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BluerprintsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
