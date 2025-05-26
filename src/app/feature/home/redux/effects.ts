import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap} from 'rxjs';

import {sendContactData} from './actions';
import {ContactService} from '../service/contact.service';

/**
 * Home effects.
 *
 * @export
 * @class HomeEffects
 * @typedef {HomeEffects}
 */
@Injectable()
export class HomeEffects {
  /**
   * Intercepts the action {@link sendContactData} to send the contact data to save,
   * calls {@link ContactService.postContactData postContactData} to post it,
   * then logs the response.
   *
   * @public
   * @readonly
   * @type {*}
   */
  public readonly sendContactData$ = createEffect(() => this.actions$.pipe(
    ofType(sendContactData),
    switchMap(({data}) => this.contactService.postContactData({
      ...data,
      timestamp: new Date()
    }).pipe(
      map(response => console.log(response)),
      catchError(error => of(console.log(error)))
    ))
  ), {dispatch: false});

  /**
   * @constructor
   * @public
   * @param {Actions} actions$ 
   * @param {ContactService} contactService 
   */
  public constructor(private readonly actions$: Actions, private readonly contactService: ContactService) {}
}
