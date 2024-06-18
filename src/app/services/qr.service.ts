import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrService {

  constructor(private _http: HttpClient) { }

  getQr(contenido: string, wdata: string, hdata: string, fgcolor: string, bgcolor: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': 'df9f879274msh4cb1a159ee30ef7p1470b2jsnfd3e0708f691',
        'x-rapidapi-host': 'neutrinoapi-qr-code.p.rapidapi.com',
        'Content-Type': 'application/json'
      }),
    };

    const body = {
      'content': contenido,
      'width': wdata,
      'height': hdata,
      'fg-color': fgcolor,
      'bg-color': bgcolor
    };

    return this._http.post('https://neutrinoapi-qr-code.p.rapidapi.com/qr-code', body, httpOptions);
  }

}
