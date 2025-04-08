import { TestBed } from '@angular/core/testing';

import { DessertStoreService } from './dessert-store.service';

describe('DessertStoreService', () => {
  let service: DessertStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DessertStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
