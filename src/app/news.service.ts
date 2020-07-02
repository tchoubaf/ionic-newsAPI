import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';

const API_URL = environment.aU;
const API_KEY = environment.aK;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(url){
    return this.http.get(`${API_URL}/${url}&aK=${API_KEY}`);
  }
}
