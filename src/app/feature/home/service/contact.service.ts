import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {ContactData} from '../model/contact-data.interface';
import {ContactResult} from '../model/contact-result.interface';

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
  public postContactData(data: ContactData): Observable<ContactResult> {
    return this.post<ContactResult>('/api/workers/contact-save', data);
  }
}
