import {Component, Input} from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

import {ROUTE} from '~tpt/core/model/route.enum';
import {LinkButtonComponent} from '~tpt/shared/component/button/link-button/link-button.component';

/**
 * Header component.
 *
 * @export
 * @class HeaderComponent
 * @typedef {HeaderComponent}
 */
@Component({
  selector: 'tpt-header',
  standalone: true,
  imports: [
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    LinkButtonComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  /**
   * Active route.
   *
   * @public
   * @type {!ROUTE}
   */
  @Input({required: true})
  public activeRoute!: ROUTE;

  /**
   * Whether the navigation floating menu is open.
   *
   * @public
   * @type {boolean}
   */
  public menuOpen = false;

  /**
   * Update the tracking of the floating menu's open state.
   *
   * @public
   */
  public onMenuOpen() {
    this.menuOpen = true;
  }

  /**
   * Update the tracking of the floating menu's open state.
   *
   * @public
   */
  public onMenuClose() {
    this.menuOpen = false;
  }
}
