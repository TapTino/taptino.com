import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {forkJoin, map} from 'rxjs';

import {NewsCardComponent} from './component/news-card/news-card.component';
import {News} from './model/news.type';

import {SubscriberComponent} from '~tpt/core/abstract/subscriber.component';

/**
 * Newsletter.
 *
 * @export
 * @class NewsLetterComponent
 * @typedef {NewsletterComponent}
 */
@Component({
  selector: 'tpt-news',
  standalone: true,
  imports: [RouterModule, NewsCardComponent, HttpClientModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsletterComponent extends SubscriberComponent implements OnInit {
  private readonly slugs = ['pitch-day', 'test'];

  public news: [string, News][] = [];

  public constructor(private readonly http: HttpClient) {
    super();
  }

  public ngOnInit(): void {
    forkJoin(this.slugs.map(slug => this.http.get<News>(`assets/news/${slug}/${slug}.json`).pipe(map(news => [slug, news] as [string, News]))))
      .pipe(map(results => results.sort((a, b) => new Date(b[1].date[0], b[1].date[1], b[1].date[2]).getTime() - new Date(a[1].date[0], a[1].date[1], a[1].date[2]).getTime())))
      .subscribe(sorted => (this.news = sorted));
  }
}
