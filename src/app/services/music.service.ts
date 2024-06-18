import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private _http: HttpClient) { 
    console.log('Servicio de musica cargado');
  }

getMusic(term: string): Observable<any> {
  let httpOptions = {
    headers: new HttpHeaders({
      'X-RapidAPI-Key': 'df9f879274msh4cb1a159ee30ef7p1470b2jsnfd3e0708f691',
      'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    })
  }
  return this._http.get("https://shazam.p.rapidapi.com/search?term="+term+"&locale=en-US&offset=0&limit=5", httpOptions);
}


}