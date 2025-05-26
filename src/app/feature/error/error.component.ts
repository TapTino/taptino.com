import {Component} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {Store} from '@ngrx/store';

import {openIssue} from '~tpt/core/redux/actions';
import {State} from '~tpt/core/redux/feature';
import {ButtonComponent} from '~tpt/shared/component/button/button/button.component';

/**
 * Error page.
 *
 * @export
 * @class ErrorComponent
 * @typedef {ErrorComponent}
 */
@Component({
  selector: 'tpt-error',
  standalone: true,
  imports: [RouterModule, ButtonComponent],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {
  /**
   * Current route.
   *
   * @public
   * @readonly
   * @type {string}
   */
  public get route() {
    return this.router.url.slice(1);
  }

  /**
   * @constructor
   * @public
   * @param {Store<State>} store$
   * @param {Router} router
   */
  public constructor(private readonly store$: Store<State>, private readonly router: Router) {}

  /**
   * Opens a new GitHub issue for the missing route.
   *
   * @public
   */
  public openIssue() {
    this.store$.dispatch(openIssue({
      title: 'Errore 404 durante la navigazione',
      // eslint-disable-next-line max-len
      body: `Buongiorno,\n\nStavo cercando di visitare la pagina https://taptino.com/#/${this.route}, ma viene invece mostrata la pagina di 404.\n\nHo trovato il link della pagina/ho raggiunto la pagina tramite: ___\nLe informazioni che stavo cercando in quella pagina sono: ___\nInformazioni aggiuntive: ___\n\nGrazie per il vostro tempo`
    }));
  }
}
