import { Injectable } from '@angular/core';
import { GlobalsService } from '../globals/globals.service';
import { HttpClient } from '@angular/common/http';
import { Match } from 'src/model/interfaces/match.interface';

@Injectable({
  providedIn: 'root',
})
export class MatchesService {
  private baseUrl: string;

  constructor(
    private http: HttpClient,
    private globalsService: GlobalsService
  ) {
    this.baseUrl = this.globalsService.getBaseUrl() + 'matches';
  }

  getMatch(id: string) {
    return this.http.get<Match>(`${this.baseUrl}/${id}`);
  }

  getState(id: string) {
    return this.http.get<any>(`${this.baseUrl}/${id}/state`);
  }

  createMatch(game: string, state: any) {
    return this.http.post<Match>(`${this.baseUrl}/`, { game, state, creator: 'a' });
  }

  updateMatchState(_id: string, state: any) {
    return this.http.put<Match>(`${this.baseUrl}/`, { _id, state });
  }
}
