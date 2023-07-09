import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { environment } from 'src/environments/environment';
import { student } from './student/student.module';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class studentService {

  constructor(private http: HttpClient) { }

  getStudent(): Observable<student[]> {
    return this.http.get<student[]>(`${environment.apiBaseURI}/Student`);
  }

  getStudentByID(id: string): Observable<student> {
    return this.http.get<student>(`${environment.apiBaseURI}/Student/${id}`);
  }

  createStudent(student: student): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseURI}/Student`, student, httpOptions);
  }

  updateStudent(id: string, student: student): Observable<void> {
    return this.http.put<void>(`${environment.apiBaseURI}/Student/${id}`, student, httpOptions);
  }

  deleteStudent(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiBaseURI}/Student/${id}`);
  }
}