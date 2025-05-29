import {AsyncPipe} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Store} from '@ngrx/store';

import {ContactFormComponent} from './component/contact-form/contact-form.component';
import {ContactForm} from './model/contact-form.interface';
import {sendContactData} from './redux/actions';
import {homeFeature, State} from './redux/feature';
import {ContactService} from './service/contact.service';

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
  imports: [
    RouterModule,
    HttpClientModule,
    ContactFormComponent,
    AsyncPipe
  ],
  providers: [ContactService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  /**
   * Result of posting the contact result form.
   *
   * @public
   * @readonly
   * @type {Observable<boolean | null>}
   */
  public readonly contactPostResult$ = this.store$.select(homeFeature.selectContactPostResult);

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
