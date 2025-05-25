import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

import {SelectComponent} from '../../../../shared/component/form/select/select.component';
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
    SelectComponent
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent extends FormComponent<ContactForm> {
  public readonly interests: Record<Interest, string> = {
    buy: 'Vorrei richiedere una demo!',
    work: 'Vorrei entrare a far parte del team!'
  };

  /**
   * @inheritdoc
   *
   * @protected
   * @returns {FormType<ContactForm>}
   */
  protected override initForm(): FormType<ContactForm> {
    return {
      name: new FormControl('', {
        nonNullable: true,
        validators: Validators.required
      }),
      surname: new FormControl('', {
        nonNullable: true,
        validators: Validators.required
      }),
      profession: new FormControl('', {
        nonNullable: true,
        validators: Validators.required
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
