import {Interest} from './interest.type';

/**
 * Contact form data.
 *
 * @export
 * @interface ContactForm
 * @typedef {ContactForm}
 */
export interface ContactForm {
  recaptcha: string | null;
  /**
   * Name.
   *
   * @type {string}
   */
  name: string;
  /**
   * Surname.
   *
   * @type {string}
   */
  surname: string;
  /**
   * Profession.
   *
   * @type {string}
   */
  profession: string;
  /**
   * Email.
   *
   * @type {string}
   */
  email: string;
  /**
   * Person interest in the project.
   *
   * @type {Interest | null}
   */
  interest: Interest | null;
  /**
   * Contact message.
   *
   * @type {string}
   */
  message: string;
}
