import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private _http: HttpClient) {
    console.log('Servicio de email cargado');
   }

getValidaciones(email: string): Observable<any> {
  let httpOptions = {
    headers: new HttpHeaders({
      'x-rapidapi-key': 'df9f879274msh4cb1a159ee30ef7p1470b2jsnfd3e0708f691',
      'x-rapidapi-host': 'community-neutrino-email-validate.p.rapidapi.com',
      'Content-Type': 'application/json'
    }),
  }
  
  const body = {
    'email': email
  };

  return this._http.post('https://community-neutrino-email-validate.p.rapidapi.com/email-validate', body, httpOptions);
}

}
