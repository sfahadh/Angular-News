import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from './components/news-list/news-list.component';

const routes: Routes = [
  { path: '', component: NewsListComponent },
  { path: 'business', component: NewsListComponent },
  { path: 'politics', component: NewsListComponent },
  { path: 'science', component: NewsListComponent },
  { path: 'technology', component: NewsListComponent },
  { path: 'sports', component: NewsListComponent },
  { path: 'health', component: NewsListComponent },
  { path: 'finance', component: NewsListComponent },
  { path: 'entertainment', component: NewsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
