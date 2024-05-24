import { TestBed } from '@angular/core/testing';

import { BlueprintStoreService } from './blueprint-store.service';

describe('BlueprintStoreService', () => {
  let service: BlueprintStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlueprintStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
