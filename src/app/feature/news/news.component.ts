import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';

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
  public readonly pitchDayDate = new Date(2025, 5, 13);

  private readonly slugs = ['pitch-day', 'test'];

  public news: [string, News][] = [];

  public constructor(private readonly http: HttpClient) {
    super();
  }

  public ngOnInit(): void {
    for (const slug of this.slugs) {
      this.http.get<News>(`assets/news/${slug}/${slug}.json`).pipe(this.takeUntil()).subscribe(news => {
        this.news.push([slug, news]);
      });
    }
  }
}
