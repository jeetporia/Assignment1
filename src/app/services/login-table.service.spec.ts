import { TestBed, inject } from '@angular/core/testing';

import { LoginTableService } from './login-table.service';

describe('LoginTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginTableService]
    });
  });

  it('should be created', inject([LoginTableService], (service: LoginTableService) => {
    expect(service).toBeTruthy();
  }));
});
