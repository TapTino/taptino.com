import {Component, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

import {COUNTRIES, Country} from '~tpt/feature/home/model/country.const';
import {TptControlValueAccessor} from '~tpt/shared/component/form/cva/control-value-accessor';
import {CharFilterDirective} from '~tpt/shared/directive/char-filter.directive';

/**
 * TapTino phone prefix component.
 *
 * @export
 * @class PhonePrefixComponent
 * @typedef {PhonePrefixComponent}
 * @extends {TptControlValueAccessor<string>}
 */
@Component({
  selector: 'tpt-phone-prefix',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatAutocompleteModule,
    MatIconModule,
    CharFilterDirective
  ],
  templateUrl: 'phone-prefix.component.html',
  styleUrl: 'phone-prefix.component.scss'
})
export class PhonePrefixComponent extends TptControlValueAccessor<string> implements AfterViewInit {
  /**
   * `HTMLInputElement` child element.
   *
   * @public
   * @type {?ElementRef<HTMLInputElement>}
   */
  @ViewChild('inputElement', {read: ElementRef<HTMLInputElement>})
  public inputElement?: ElementRef<HTMLInputElement>;

  public readonly countries = COUNTRIES;

  public get test() {
    return this.countries;
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
    // Const digits = this.value?.replace(/\D+/g, '') ?? '';
    // This.applyMaskToView(digits);
    // This.writeValue(this.value);
  }

  public onCountryPicked(c: Country) {
    /* Mat-option fires onSelectionChange – make sure we store real object */
    // This.form.controls.country.setValue(c);
    this.writeValue(c.code);
  }

  private applyMaskToView(digits: string) {
    const grouped: string[] = [];
    // Let cursor = 0;
    // For (const len of this.grouping) {
    //   If (cursor >= digits.length) {
    //     Break;
    //   }
    //   Grouped.push(digits.slice(cursor, cursor + len));
    //   Cursor += len;
    // }
    if (this.inputElement) {
      this.inputElement.nativeElement.value = grouped.join(' ');
    }
  }
}
