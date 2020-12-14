import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
  
export class NewsListComponent implements OnInit {
  articles: any[];
  
  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getTopHeadlines("us").subscribe(news => {
      this.articles = news.articles;
      console.log(this.articles);
    });
  }

}
