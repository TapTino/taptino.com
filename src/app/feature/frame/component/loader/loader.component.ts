import {Component, Input} from '@angular/core';
import {MatProgressBarModule, ProgressBarMode} from '@angular/material/progress-bar';

/**
 * Loader component.
 *
 * @export
 * @class LoaderComponent
 * @typedef {LoaderComponent}
 */
@Component({
  selector: 'tpt-loader',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  /**
   * Whether there is any loading.
   *
   * @public
   * @type {!(boolean | null)}
   */
  @Input({required: true})
  public loading!: boolean | null;

  /**
   * Loading bar mode.
   *
   * @public
   * @type {ProgressBarMode}
   */
  @Input({transform: (value: ProgressBarMode | null) => value ?? 'indeterminate'})
  public progressMode: ProgressBarMode = 'indeterminate';

  /**
   * Optional loading progress.
   *
   * @public
   * @type {number}
   */
  @Input({transform: (value: number | null) => value ?? -1})
  public progress = -1;
}
