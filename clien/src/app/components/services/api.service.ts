import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { apiResponse } from '../form/models/apiResponse';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) { }
  apiUrl = 'http://localhost:3000/nodeApi';
  postRequest(pn: string) {
    return this.http.post(this.apiUrl, { phoneNumber: pn });
  }
  getRequest() {
    return this.http.get<apiResponse[]>(this.apiUrl);
  }
}
