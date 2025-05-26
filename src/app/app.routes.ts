import {Routes} from '@angular/router';
import {provideEffects} from '@ngrx/effects';

import {ROUTE} from './core/model/route.enum';
import {HomeEffects} from './feature/home/redux/effects';
import {ContactService} from './feature/home/service/contact.service';

/**
 * Application routes.
 *
 * @type {Routes}
 */
export const ROOT_ROUTES: Routes = [
  {
    path: ROUTE.HOME,
    loadComponent: () => import('~tpt/feature/home/home.component').then(m => m.HomeComponent),
    providers: [provideEffects(HomeEffects), ContactService]
  },
  {
    path: ROUTE.NEWSLETTER,
    loadComponent: () => import('~tpt/feature/news/news.component').then(m => m.NewsletterComponent)
  },
  {
    path: '**',
    loadComponent: () => import('~tpt/feature/error/error.component').then(m => m.ErrorComponent)
  }
];
