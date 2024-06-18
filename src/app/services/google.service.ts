import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  constructor(private _http: HttpClient) { }

  getBusqueda(busqueda: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': 'df9f879274msh4cb1a159ee30ef7p1470b2jsnfd3e0708f691',
        'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
      })
    }
    return this._http.get('https://google-search74.p.rapidapi.com/?query='+busqueda+'&limit=10&related_keywords=true', httpOptions);
  }
}
