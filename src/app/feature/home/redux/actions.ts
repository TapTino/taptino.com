import {createAction, props} from '@ngrx/store';

import {ContactForm} from '../model/contact-form.interface';

/**
 * Sends remotely the contact data.
 */
export const sendContactData = createAction('[Home] Send contact data', props<{data: ContactForm}>());

/**
 * Saves the result of posting the contact data.
 */
export const saveContactPostResult = createAction('[Home] Save contact post result', props<{contactPostResult: boolean}>());
