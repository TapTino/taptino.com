import {AbstractControl, ValidationErrors} from '@angular/forms';

/**
 * Contact form validators.
 *
 * @export
 * @class ContactValidators
 * @typedef {ContactValidators}
 */
export class ContactValidators {
  /**
   * Requires the control to have a non-blank value.
   *
   * @public
   * @static
   * @param {AbstractControl} control 
   * @returns {ValidationErrors | null} 
   */
  public static notBlank(control: AbstractControl): ValidationErrors | null {
    if (control.value && !control.value.trim()) {
      return {'blank': true};
    }
    return null;
  }
}
