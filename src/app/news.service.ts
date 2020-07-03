import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;
const Cors_URL = environment.Cors;

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  currentArticle: any;
  constructor(private http: HttpClient) { }

  getNews(url: any){
    return this.http.get(`${Cors_URL}/${API_URL}/${url}&apiKey=${API_KEY}`);
  }
}
