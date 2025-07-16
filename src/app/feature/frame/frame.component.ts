import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Title} from '@angular/platform-browser';
import {NavigationEnd, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {filter} from 'rxjs';

import {FooterComponent} from './component/footer/footer.component';
import {HeaderComponent} from './component/header/header.component';
import {LoaderComponent} from './component/loader/loader.component';

import {SubscriberComponent} from '~tpt/core/abstract/subscriber.component';
import {ROUTE, isValidRoute} from '~tpt/core/model/route.enum';
import {openIssue} from '~tpt/core/redux/actions';
import {State, coreFeature} from '~tpt/core/redux/feature';
import {SnackBarComponent} from '~tpt/shared/component/snack-bar/snack-bar.component';

/**
 * Frame component.
 *
 * @export
 * @class FrameComponent
 * @typedef {FrameComponent}
 */
@Component({
  selector: 'tpt-frame',
  standalone: true,
  imports: [
    AsyncPipe,
    LoaderComponent,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './frame.component.html',
  styleUrl: './frame.component.scss'
})
export class FrameComponent extends SubscriberComponent {
  /**
   * Whether the website is loading.
   *
   * @public
   * @readonly
   * @type {Observable<boolean>}
   */
  public readonly loading$ = this.store$.select(coreFeature.selectLoading);

  /**
   * Which kind of loading is being performed.
   *
   * @public
   * @readonly
   * @type {Observable<ProgressBarMode>}
   */
  public readonly loadingType$ = this.store$.select(coreFeature.selectLoadingType);

  /**
   * Loading progress.
   *
   * @public
   * @readonly
   * @type {Observable<number>}
   */
  public readonly progress$ = this.store$.select(coreFeature.selectProgress);

  /**
   * Latest HTTP error.
   *
   * @private
   * @readonly
   * @type {Observable<HttpErrorResponse | null>}
   */
  private readonly error$ = this.store$.select(coreFeature.selectError);

  /**
   * Active route.
   *
   * @public
   * @type {ROUTE}
   */
  public activeRoute: ROUTE = ROUTE.HOME;

  /**
   * @constructor
   * @public
   * @param {Store<State>} store$
   * @param {Router} router
   * @param {Title} title
   * @param {MatSnackBar} snackBar
   */
  public constructor(private readonly store$: Store<State>, private readonly router: Router, private readonly title: Title, private readonly snackBar: MatSnackBar) {
    super();
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => this.setTitle((event as NavigationEnd).urlAfterRedirects.slice(1).split('#')[0]));
    this.error$.pipe(filter(error => !!error), this.takeUntil()).subscribe(error => this.snackBar.openFromComponent(SnackBarComponent, {data: error}).onAction().pipe(this.takeUntil()).subscribe(() => this.store$.dispatch(openIssue({
      title: `${error!.status} HTTP error`,
      body: `Buongiorno,\n\nSi è presentato il seguente errore:\n\`\`\`json\n${JSON.stringify(error, null, 2)}\n\`\`\`\nQuesto errore si è verificato quando ___\n\nGrazie per il vostro tempo`
    }))));
  }

  /**
   * Sets the tab title based on the current route.
   *
   * @private
   * @param {string} route
   */
  private setTitle(route?: string) {
    if (route && route.startsWith(ROUTE.NEWSLETTER) && !route.endsWith(ROUTE.NEWSLETTER)) {
      // TODO: Change page title with the actual news title.
      this.title.setTitle('iBicocca Pitch Day - TapTino');
    } else {
      switch (route) {
        case ROUTE.HOME:
          this.title.setTitle('TapTino');
          break;
        case ROUTE.NEWSLETTER:
          this.title.setTitle('Newsletter - TapTino');
          break;
        default:
          this.title.setTitle('404 - TapTino');
          break;
      }
    }
    this.activeRoute = isValidRoute(route) ? route as ROUTE : ROUTE.HOME;
  }
}
