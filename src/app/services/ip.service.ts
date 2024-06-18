import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class IpService {

  constructor(private _http: HttpClient) { }

  solicitarIp(text: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'df9f879274msh4cb1a159ee30ef7p1470b2jsnfd3e0708f691',
        'X-RapidAPI-Host': 'community-neutrino-ip-info.p.rapidapi.com'
      }),
    }
    const body = new HttpParams()
     .set('ip', text);
  
      return this._http.post('https://community-neutrino-ip-info.p.rapidapi.com/ip-info', body,httpOptions);
  }

}
