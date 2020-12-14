import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
  
export class NewsService {
  private API_KEY = "fb2632501a6a4372b832feb972f3c5a2";
  private URL = "https://newsapi.org/v2/top-headlines?country=us";

  constructor(private http: HttpClient) { }

  getTopHeadlines(): Observable<any> {
    const topHeadlineURL = `${this.URL}&apiKey=${this.API_KEY}`;
    return this.http.get<any>(topHeadlineURL);
  }

  getArticlesByCategory(category: string): Observable<any> {
    const categoryURL = `${this.URL}&category=${category}&apiKey=${this.API_KEY}`;
    return this.http.get<any>(categoryURL);
  }
}
