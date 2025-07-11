import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';

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
  imports: [RouterModule],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.scss'
})
export class NewsPageComponent {}
