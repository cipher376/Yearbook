import { TestBed } from '@angular/core/testing';

import { MyFileServiceService } from './my-file.service';

describe('MyFileServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyFileServiceService = TestBed.get(MyFileServiceService);
    expect(service).toBeTruthy();
  });
});
