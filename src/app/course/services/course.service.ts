import { Course } from './../model/course.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class CourseService {

  http: HttpClient;
  url = "http://localhost:8000";

  constructor(http: HttpClient) {
    this.http = http;
  }

  
  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('/api/courses');
  }

  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>('/api/create-course', course);
  }
  
  deleteCourse(courseId: string): Observable<any> {
    return this.http.delete('/api/courses/'+courseId);
  }

 
  updateCourse(courseId: string | number, changes: Partial<Course>): Observable<any> {
    return this.http.put('/api/courses/' + courseId, changes);
  }
}
