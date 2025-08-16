import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Survey } from '../models/survey.model';
import { Question } from '../models/question.model';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('assets/mock-data/users.json');
  }

  getSurveys(): Observable<Survey[]> {
    return this.http.get<Survey[]>('assets/mock-data/surveys.json');
  }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>('assets/mock-data/questions.json');
  }
}
