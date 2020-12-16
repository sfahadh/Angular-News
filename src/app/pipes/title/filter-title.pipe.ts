import { Pipe, PipeTransform } from '@angular/core';
import { Article } from 'src/app/models/article';

@Pipe({
  name: 'filterTitle'
})
  
export class FilterTitlePipe implements PipeTransform {

  transform(articles: Article[], title: string): unknown {
    if (title === undefined || title === "") return articles;
    return articles.filter(article => {
      return article.title.toLowerCase().startsWith(title.toLowerCase());
    });
  }

}
