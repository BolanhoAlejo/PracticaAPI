import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private _http: HttpClient) {
    console.log('Servicio de noticias cargado');
   }

getNoticias(): Observable<any> {
  let httpOptions = {
    headers: new HttpHeaders({
      'X-RapidAPI-Key': 'df9f879274msh4cb1a159ee30ef7p1470b2jsnfd3e0708f691',
      'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
    })
  }
  return this._http.get('https://livescore6.p.rapidapi.com/news/v2/list', httpOptions);
}

}

