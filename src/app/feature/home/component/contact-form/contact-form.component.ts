import {CommonModule} from '@angular/common';
import {Component, ViewChild} from '@angular/core';
import {FormControl, ReactiveFormsModule, ValidationErrors, Validators} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {RecaptchaComponent, RecaptchaFormsModule, RecaptchaModule} from 'ng-recaptcha';

import {SelectComponent} from '../../../../shared/component/form/select/select.component';
import {ContactValidators} from '../../class/contact-validators.class';
import {ContactForm} from '../../model/contact-form.interface';
import {Interest} from '../../model/interest.type';

import {FormComponent} from '~tpt/core/abstract/form-component';
import {FormType} from '~tpt/core/model/form-type.type';
import {ButtonComponent} from '~tpt/shared/component/button/button/button.component';
import {InputComponent} from '~tpt/shared/component/form/input/input.component';
import {TextareaComponent} from '~tpt/shared/component/form/textarea/textarea.component';

/**
 * Contact form.
 *
 * @export
 * @class ContactFormComponent
 * @typedef {ContactFormComponent}
 * @extends {FormComponent<ContactForm>}
 * @implements {OnInit}
 */
@Component({
  selector: 'tpt-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
    TextareaComponent,
    SelectComponent,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent extends FormComponent<ContactForm> {
  @ViewChild('recaptcha')
  public recaptcha?: RecaptchaComponent;

  /**
   * Available interests people can show in the product.
   *
   * @public
   * @readonly
   * @type {Record<Interest, string>}
   */
  public readonly interests: Record<Interest, string> = {
    demo: 'Vorrei richiedere una demo!',
    lavoro: 'Vorrei entrare a far parte del team!'
  };

  /**
   * Error parser for email errors.
   *
   * @public
   * @param {ValidationErrors} errors validation errors.
   * @returns {string | null} parsed error.
   */
  public emailErrorsParser(errors: ValidationErrors): string | null {
    if ('email' in errors) {
      return 'Indirizzo email non valido';
    }
    return null;
  }

  /**
   * Verify that the user can submit the form with ReCaptcha.
   *
   * @public
   */
  public verify(): void {
    this.recaptcha!.execute();
  }

  /**
   * Submit the form only if the response from ReCaptcha was positive.
   *
   * @public
   * @param {string | null} response response from ReCaptcha.
   */
  public onResolved(response: string | null) {
    if (response) {
      this.emitSubmit();
      this.reset();
    }
  }

  /**
   * @inheritdoc
   *
   * @protected
   * @returns {FormType<ContactForm>}
   */
  protected override initForm(): FormType<ContactForm> {
    return {
      recaptcha: new FormControl(null),
      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, ContactValidators.notBlank]
      }),
      surname: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, ContactValidators.notBlank]
      }),
      profession: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, ContactValidators.notBlank]
      }),
      email: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email]
      }),
      interest: new FormControl(null, {validators: [Validators.required]}),
      message: new FormControl('', {nonNullable: true})
    };
  }
}
