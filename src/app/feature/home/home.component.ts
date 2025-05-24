import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ContactFormComponent} from './contact/contact-form/contact-form.component';
import {ContactForm} from './model/contact-form.interface';

/**
 * Homepage.
 *
 * @export
 * @class HomeComponent
 * @typedef {HomeComponent}
 */
@Component({
  selector: 'tpt-home',
  standalone: true,
  imports: [RouterModule, ContactFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public handleSubmit(form: ContactForm) {
    console.log(form);
  }
}
