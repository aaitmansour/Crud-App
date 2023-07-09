import { TestBed } from '@angular/core/testing';

import { studentService } from './student.service';

describe('StudentService', () => {
  let service: studentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(studentService);
  });

  it('should be created', () => {
    const service: studentService = TestBed.get(studentService);
    expect(service).toBeTruthy();
  });
});
