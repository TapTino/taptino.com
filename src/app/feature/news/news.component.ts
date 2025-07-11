import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';

import {NewsCardComponent} from './component/news-card/news-card.component';

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
  imports: [RouterModule, NewsCardComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsletterComponent {
  public readonly pitchDayDate = new Date(2025, 5, 13);
}
