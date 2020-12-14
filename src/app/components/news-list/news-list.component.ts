import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
  
export class NewsListComponent implements OnInit {

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getTopHeadlines("us").subscribe(news => {
      console.log(news);
    });
  }

}
