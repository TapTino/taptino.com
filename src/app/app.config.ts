import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {MAT_RIPPLE_GLOBAL_OPTIONS} from '@angular/material/core';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideRouter, withInMemoryScrolling} from '@angular/router';
import {provideEffects} from '@ngrx/effects';
import {provideState, provideStore} from '@ngrx/store';
import {environment} from 'environments/environment';
import {RECAPTCHA_SETTINGS, RECAPTCHA_V3_SITE_KEY} from 'ng-recaptcha';

import {ROOT_ROUTES} from './app.routes';
import {CoreEffects} from './core/redux/effects';
import {coreFeature} from './core/redux/feature';
import {Interceptor} from './core/service/interceptor.service';
import {SCROLL_TO_TOP_OPTIONS} from './shared/component/scroll-to-top/model/scroll-to-top-options.const';

/**
 * Application configuration.
 *
 * @type {ApplicationConfig}
 */
export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideStore(),
    provideState(coreFeature),
    provideEffects(CoreEffects),
    provideRouter(ROOT_ROUTES, withInMemoryScrolling({
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled'
    })),
    provideAnimationsAsync(),
    {
      provide: MAT_RIPPLE_GLOBAL_OPTIONS,
      useValue: {
        disabled: true,
        animation: {
          enterDuration: 0,
          exitDuration: 0
        }
      }
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {subscriptSizing: 'dynamic'}
    },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        politeness: 'assertive',
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: 'tpt-snack-bar'
      }
    },
    {
      provide: SCROLL_TO_TOP_OPTIONS,
      useValue: {
        minPageHeight: 2048,
        minScrollHeight: 384
      }
    },
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptchaKey,
        size: 'invisible'
      }
    },
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.recaptchaKey
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ]
};
