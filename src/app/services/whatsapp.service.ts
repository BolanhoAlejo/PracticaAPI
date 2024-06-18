import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {

  constructor(private _http: HttpClient) { }

getValidacion(number: string): Observable<any> {
  let httpOptions = {
    headers: new HttpHeaders({
      'x-rapidapi-key': 'df9f879274msh4cb1a159ee30ef7p1470b2jsnfd3e0708f691',
      'x-rapidapi-host': 'whatsapp-number-validators.p.rapidapi.com',
      'Content-Type': 'application/json'
    }),
  }
  const body = new HttpParams()
   .set('number', number);

    return this._http.post('https://whatsapp-number-validators.p.rapidapi.com/v1/validate/wa_id', body,httpOptions);
}


}
