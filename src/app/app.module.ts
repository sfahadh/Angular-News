import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsComponent } from './components/news/news.component';
import { FilterComponent } from './components/filter/filter.component';
import { FilterPublisherPipe } from './pipes/filter-publisher.pipe';
import { FilterTitlePipe } from './pipes/filter-title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewsListComponent,
    NewsComponent,
    FilterComponent,
    FilterPublisherPipe,
    FilterTitlePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
