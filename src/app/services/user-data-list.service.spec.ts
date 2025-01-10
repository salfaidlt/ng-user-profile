import { TestBed } from '@angular/core/testing';

import { UserDataListService } from './user-data-list.service';

describe('UserDataListService', () => {
  let service: UserDataListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDataListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
