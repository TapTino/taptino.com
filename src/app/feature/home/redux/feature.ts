import {createFeature, createReducer, on} from '@ngrx/store';

import {saveContactPostResult, sendContactData} from './actions';

/**
 * Home store.
 *
 * @export
 * @interface State
 * @typedef {State}
 */
export interface State {
  /**
   * Result of posting the contact data.
   *
   * @type {boolean | null}
   */
  contactPostResult: boolean | null;
}

/**
 * Home store initial state.
 *
 * @type {State}
 */
export const INITIAL_STATE: State = {
  contactPostResult: null
};

/**
 * Home store feature.
 */
export const homeFeature = createFeature({
  name: 'home',
  reducer: createReducer(
    INITIAL_STATE,
    on(sendContactData, state => ({
      ...state,
      contactPostResult: null
    })),
    on(saveContactPostResult, (state, {contactPostResult}) => ({
      ...state,
      contactPostResult
    }))
  )
});
