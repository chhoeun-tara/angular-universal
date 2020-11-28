import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  public getFast(): Observable<any> {
    return this.http.get<any>(`${environment.url}/fast`);
  }

  public getSlow(): Observable<any> {
    return this.http.get<any>(`${environment.url}/slow`);
  }
}
