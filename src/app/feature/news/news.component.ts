import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';

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
  imports: [RouterModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsletterComponent {}
