import {Component, Input} from '@angular/core';
import {RouterModule} from '@angular/router';

import {News} from '../../model/news.type';

/**
 * News Card.
 *
 * @export
 * @class NewsCardComponent
 * @typedef {NewsCardComponent}
 */
@Component({
  selector: 'tpt-news-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss'
})
export class NewsCardComponent {
  @Input({required: true})
  public img!: string;

  @Input({required: true})
  public date!: News['date'];

  @Input({required: true})
  public title!: string;

  @Input({required: true})
  public subtitle!: string;

  @Input({required: true})
  public preview!: string;

  @Input({required: true})
  public slug!: string;

  public get timestamp() {
    return this.date ? `${this.format(this.date[2])}/${this.format(this.date[1] + 1)}/${this.date[0]}` : '';
  }

  private format(n: number): string {
    return `0${n}`.slice(-2);
  }
}
