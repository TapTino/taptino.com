import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {catchError, map, of, switchMap} from 'rxjs';

import {saveContactPostResult, sendContactData} from './actions';
import {State} from './feature';
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
   * then emits the action {@link saveContactPostResult} to save the outcome.
   *
   * @public
   * @readonly
   * @type {TypedAction<"[Home] Save contact post result">}
   */
  public readonly sendContactData$ = createEffect(() => this.actions$.pipe(
    ofType(sendContactData),
    switchMap(({data}) => this.contactService.postContactData({
      ...data,
      timestamp: new Date()
    }).pipe(
      map(response => saveContactPostResult({contactPostResult: response.message === 'Data saved'})),
      catchError(() => of(saveContactPostResult({contactPostResult: false})))
    ))
  ));

  /**
   * @constructor
   * @public
   * @param {Actions} actions$
   * @param {Store<State>} store$
   * @param {ContactService} contactService
   */
  public constructor(private readonly actions$: Actions, private readonly store$: Store<State>, private readonly contactService: ContactService) {}
}
