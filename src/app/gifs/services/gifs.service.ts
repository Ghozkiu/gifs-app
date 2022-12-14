import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _history: string[] = [];
  private apiKey: string = environment.API_KEY;
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  public results: Gif[] = [];

  constructor(private http: HttpClient) {
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    console.log(this._history);
    this.results = JSON.parse(localStorage.getItem('results')!) || [];
  }

  get history(): string[] {
    return [...this._history];
  }

  searchGifs(query: string = ''): void {
    query = query.trim().toLowerCase();
    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);
      localStorage.setItem('history', JSON.stringify(this._history));
    }

    // console.log(this._history);
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http
      .get<SearchGifsResponse>(`${this.serviceUrl}/search`, { params: params })
      .subscribe((res) => {
        // console.log(res.data);
        this.results = res.data;
        localStorage.setItem('results', JSON.stringify(this.results));
      });
  }
}
