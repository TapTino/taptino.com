import {HttpClientModule} from '@angular/common/http';
import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Store} from '@ngrx/store';

import {ContactFormComponent} from './component/contact-form/contact-form.component';
import {ContactForm} from './model/contact-form.interface';
import {sendContactData} from './redux/actions';
import {ContactService} from './service/contact.service';

import {State} from '~tpt/core/redux/feature';

/**
 * Homepage.
 *
 * @export
 * @class HomeComponent
 * @typedef {HomeComponent}
 */
@Component({
  selector: 'tpt-home',
  standalone: true,
  imports: [RouterModule, ContactFormComponent, HttpClientModule],
  providers: [ContactService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  /**
   * @constructor
   * @public
   * @param {Store<State>} store$
   */
  public constructor(private readonly store$: Store<State>) {}

  /**
   * Sends the contact data to save.
   *
   * @public
   * @param {ContactForm} data 
   */
  public handleSubmit(data: ContactForm) {
    this.store$.dispatch(sendContactData({data}));
  }
}
