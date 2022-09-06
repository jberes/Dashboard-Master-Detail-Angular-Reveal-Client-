import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RevealDashboardsListService {
  constructor(private http: HttpClient) { }

  public getDashboards(): Observable<any> {
    return this.http.get(`https://excel2json.io/api/share/9d984c93-9ddc-422c-436f-08da496bf5f2`);
  }
}
