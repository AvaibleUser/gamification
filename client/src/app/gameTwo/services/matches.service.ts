import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {
  private baseUrl = 'http://localhost:3001/matches';

  constructor(private http: HttpClient) { }

  createMatch(matchData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, matchData);
  }

}
