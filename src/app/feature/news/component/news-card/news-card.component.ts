import {Component, Input} from '@angular/core';
import {RouterModule} from '@angular/router';

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
  public date!: Date;

  @Input({required: true})
  public title!: string;

  @Input({required: true})
  public subtitle!: string;

  @Input({required: true})
  public preview!: string;

  public get timestamp() {
    return this.date ? `${this.format(this.date.getDate())}/${this.format(this.date.getMonth() + 1)}/${this.date.getFullYear()}` : '';
  }

  private format(n: number): string {
    return `0${n}`.slice(-2);
  }
}
