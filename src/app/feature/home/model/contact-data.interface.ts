import {ContactForm} from './contact-form.interface';

/**
 * Contact data to save remotely.
 *
 * @export
 * @interface ContactData
 * @typedef {ContactData}
 * @extends {ContactForm}
 */
export interface ContactData extends ContactForm {
  /**
   * Timestamp of the data collection.
   *
   * @type {Date}
   */
  timestamp: Date;
}
