import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor(private _http: HttpClient) { 
    console.log('Servicio de traduccion cargado');
  }

getLenguajes(): Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
      'X-RapidAPI-Key': 'df9f879274msh4cb1a159ee30ef7p1470b2jsnfd3e0708f691',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    })
  }
    return this._http.get('https://google-translate1.p.rapidapi.com/language/translate/v2/languages', httpOptions); 
}

translateText(text: string, source: string, target: string): Observable<any> {
  const httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': 'df9f879274msh4cb1a159ee30ef7p1470b2jsnfd3e0708f691',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    }),
  }
  const body = new HttpParams()
   .set('q', text)
   .set('source', source)
   .set('target', target);

    return this._http.post('https://google-translate1.p.rapidapi.com/language/translate/v2', body,httpOptions);
}

}
