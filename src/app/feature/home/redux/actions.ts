import {createAction, props} from '@ngrx/store';

import {ContactForm} from '../model/contact-form.interface';

/**
 * Sends remotely the contact data.
 */
export const sendContactData = createAction('[Home] Send contact data', props<{data: ContactForm}>());
