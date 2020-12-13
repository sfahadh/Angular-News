import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
  
export class NewsService {
  private API_KEY = "fb2632501a6a4372b832feb972f3c5a2";
  private URL = "https://newsapi.org/v2/";
  private categories = ["top-headlines", "everything", "sources"];

  constructor() { }

  getTopHeadlines(country: string) {
    return `${this.URL}/top-headlines?country=${country}&apiKey=${this.API_KEY}`;
  }
}
