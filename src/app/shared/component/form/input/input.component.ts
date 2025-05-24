import {Component, Input, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

import {CharFilterDirective} from '../../../directive/char-filter.directive';
import {TptControlValueAccessor} from '../cva/control-value-accessor';

/**
 * TapTino input component.
 *
 * @export
 * @class InputComponent
 * @typedef {InputComponent}
 * @extends {TptControlValueAccessor<string>}
 */
@Component({
  selector: 'tpt-input',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatIconModule,
    CharFilterDirective
  ],
  templateUrl: 'input.component.html',
  styleUrl: 'input.component.scss'
})
export class InputComponent extends TptControlValueAccessor<string> implements AfterViewInit {
  /**
   * Regex to filter the user input.
   *
   * @public
   * @type {(string | RegExp)}
   */
  @Input()
  public regex: string | RegExp = /.*/;

  /**
   * `HTMLInputElement` child element.
   *
   * @public
   * @type {?ElementRef<HTMLInputElement>}
   */
  @ViewChild('inputElement', {read: ElementRef<HTMLInputElement>})
  public inputElement?: ElementRef<HTMLInputElement>;

  /**
   * Handles the `blur` event.
   *
   * @public
   */
  public blur(): void {
    this.onTouched();
  }

  /**
   * Handles the `input` event.
   *
   * @public
   */
  public input(): void {
    this.writeValue(this.value);
  }

  /**
   * Handles the `empty` event.
   *
   * @public
   * @param {MouseEvent} event
   */
  public empty(event: MouseEvent): void {
    event.stopPropagation();
    if (this.value) {
      this.writeValue('');
      this.inputElement?.nativeElement.focus();
    }
  }
}
