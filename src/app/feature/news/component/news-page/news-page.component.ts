import {DatePipe} from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {MarkdownModule} from 'ngx-markdown';
import {CarouselModule} from 'primeng/carousel';

import {News} from '../../model/news.type';

import {SubscriberComponent} from '~tpt/core/abstract/subscriber.component';

type Align = 'left' | 'right' | 'center';

/**
 * News Page.
 *
 * @export
 * @class NewsPageComponent
 * @typedef {NewsPageComponent}
 */
@Component({
  selector: 'tpt-news',
  standalone: true,
  imports: [
    RouterModule,
    DatePipe,
    HttpClientModule,
    CarouselModule,
    MarkdownModule
  ],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.scss'
})
export class NewsPageComponent extends SubscriberComponent implements OnInit {
  /**
   * Pre-computed alignment for each section (re-computed on every change).
   */
  public alignments: Align[] = [];

  public news: News | null = null;

  public slug: string | null = null;

  public constructor(private readonly route: ActivatedRoute, private readonly http: HttpClient) {
    super();
  }

  public ngOnInit(): void {
    this.route.params.pipe(this.takeUntil()).subscribe(params => {
      this.slug = params['slug']!;
      this.http.get<News>(`assets/news/${this.slug}/${this.slug}.json`).pipe(this.takeUntil()).subscribe(news => {
        this.news = news;
        this.computeAlignments();
      });
    });
  }

  public getDate(date: News['date']) {
    return new Date(date[0], date[1], date[2]);
  }

  public getImage(image: string) {
    return `assets/news/${this.slug}/${image}`;
  }

  public getImages(images: string[]) {
    return images.map(image => this.getImage(image));
  }

  public getAlignment(i: number): Align {
    return this.alignments[i] ?? 'center';
  }

  private computeAlignments(): void {
    let nextLeft = true;
    this.alignments = this.news!.sections.map(sec => {
      if (sec.images.length === 1) {
        const align: Align = nextLeft ? 'left' : 'right';
        nextLeft = !nextLeft;
        return align;
      }
      return 'center';
    });
  }
}
