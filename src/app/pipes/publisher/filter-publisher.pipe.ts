import { Pipe, PipeTransform } from '@angular/core';
import { Article } from 'src/app/models/article';

@Pipe({
  name: 'filterPublisher'
})
  
export class FilterPublisherPipe implements PipeTransform {

  transform(articles: Article[], publisher: string): any {
    if (publisher === undefined || publisher === "") return articles;
    return articles.filter(article => article.source.name.toLowerCase().startsWith(publisher.toLowerCase()));
  }

}
