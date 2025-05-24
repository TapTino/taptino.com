import {Component, Input, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

import {CharFilterDirective} from '../../../directive/char-filter.directive';
import {TptControlValueAccessor} from '../cva/control-value-accessor';

/**
 * TapTino phone number component.
 *
 * @export
 * @class PhoneComponent
 * @typedef {PhoneComponent}
 * @extends {TptControlValueAccessor<string>}
 */
@Component({
  selector: 'tpt-phone',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatIconModule,
    CharFilterDirective
  ],
  templateUrl: 'phone.component.html',
  styleUrl: 'phone.component.scss'
})
export class PhoneComponent extends TptControlValueAccessor<string> implements AfterViewInit {
  /**
   * 
   *
   * @public
   * @type {(string | RegExp)}
   */
  @Input()
  public grouping: number[] = [];

  /**
   * `HTMLInputElement` child element.
   *
   * @public
   * @type {?ElementRef<HTMLInputElement>}
   */
  @ViewChild('inputElement', {read: ElementRef<HTMLInputElement>})
  public inputElement?: ElementRef<HTMLInputElement>;

  public get maxLength(): number {
    return this.grouping.reduce((sum, value) => sum + value, this.grouping.length - 1);
  }

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
    const digits = this.value?.replace(/\D+/g, '') ?? '';
    this.applyMaskToView(digits);
    this.writeValue(digits);
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

  private applyMaskToView(digits: string) {
    const grouped: string[] = [];
    let cursor = 0;
    for (const len of this.grouping) {
      if (cursor >= digits.length) {
        break;
      }
      grouped.push(digits.slice(cursor, cursor + len));
      cursor += len;
    }
    if (this.inputElement) {
      this.inputElement.nativeElement.value = grouped.join(' ');
    }
  }
}
