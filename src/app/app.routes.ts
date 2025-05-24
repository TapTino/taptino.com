import {Routes} from '@angular/router';

import {ROUTE} from './core/model/route.enum';

/**
 * Application routes.
 *
 * @type {Routes}
 */
export const ROOT_ROUTES: Routes = [
  {
    path: ROUTE.HOME,
    loadComponent: () => import('~tpt/feature/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: ROUTE.NEWSLETTER,
    loadComponent: () => import('~tpt/feature/news/news.component').then(m => m.NewsletterComponent),
    providers: []
  },
  {
    path: '**',
    loadComponent: () => import('~tpt/feature/error/error.component').then(m => m.ErrorComponent)
  }
];
