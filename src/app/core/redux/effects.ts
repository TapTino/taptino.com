import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {ignoreElements, tap} from 'rxjs';

import {download, openIssue} from './actions';
import {State} from './feature';

/**
 * Core effects.
 *
 * @export
 * @class CoreEffects
 * @typedef {CoreEffects}
 */
@Injectable()
export class CoreEffects {
  /**
   * Intercepts the action {@link download} to download the given `file`.
   *
   * @public
   * @readonly
   * @type {Observable<never>}
   */
  public readonly download$ = createEffect(() => this.actions$.pipe(
    ofType(download),
    tap(({file, id}) => this.download(file, id)),
    ignoreElements()
  ), {dispatch: false});

  /**
   * Intercepts the action {@link openIssue} to open a new GitHub issue with precompiled fields.
   *
   * @public
   * @readonly
   * @type {Observable<never>}
   */
  public readonly openIssue$ = createEffect(() => this.actions$.pipe(
    ofType(openIssue),
    tap(({title, body}) => window.open(
      `mailto:info@taptino.com?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`,
      '_blank'
    )),
    ignoreElements()
  ), {dispatch: false});

  /**
   * @constructor
   * @public
   * @param {Actions} actions$
   * @param {Store<State>} store$
   */
  public constructor(private readonly actions$: Actions, private readonly store$: Store<State>) {}

  /**
   * Downloads the given `file`.
   *
   * @private
   * @param {Blob} file
   * @param {string} id
   */
  private download(file: Blob, id: string) {
    const anchor = document.createElement('a');
    anchor.style.display = 'none';
    anchor.href = URL.createObjectURL(file);
    anchor.download = `cobweb-mod-skeleton (${id})`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  }
}
