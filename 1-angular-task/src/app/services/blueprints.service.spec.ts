import { TestBed } from '@angular/core/testing';

import { BlueprintsService } from './blueprints.service';

describe('BlueprintsService', () => {
  let service: BlueprintsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlueprintsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
