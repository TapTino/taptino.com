import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {ContactData} from '../model/contact-data.interface';

import {Service} from '~tpt/core/service/service.service';

/**
 * Handles HTTP calls for contacts.
 *
 * @export
 * @class ContactService
 * @typedef {ContactService}
 * @extends {Service}
 */
@Injectable()
export class ContactService extends Service {
  /**
   * Posts the contact data to the remote worker.
   *
   * @public
   * @param {ContactData} data 
   * @returns {Observable<string>} 
   */
  public postContactData(data: ContactData): Observable<string> {
    return this.post('/api/workers/contact-save', data);
  }
}
