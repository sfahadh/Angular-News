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
  category: string;
  
  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit(): void {
    this.category = this.router.url.slice(1);

    if (this.category.length === 0) {
      this.displayTopHeadlines();
    } else {
      this.displayArticlesByCategory();
    }
  }

  displayTopHeadlines() {
    this.newsService.getTopHeadlines().subscribe(news => {
      this.articles = news.articles;
    });
  }

  displayArticlesByCategory() {
    this.newsService.getArticlesByCategory(this.category).subscribe(news => {
      this.articles = news.articles;
    })
  }
}
