import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
  
export class NewsListComponent implements OnInit {
  articles: any[];
  
  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit(): void {
    const category = this.router.url;
    console.log(category);

    if (category.slice(1).length === 0) {
      this.newsService.getTopHeadlines("us").subscribe(news => {
        this.articles = news.articles;
        console.log(this.articles);
      });
    }
  }
}
