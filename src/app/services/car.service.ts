import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private _http: HttpClient) {
    console.log('Servicio de carros cargado');
  }

getMakes(): Observable<any> {
  let httpOptions = {
    headers: new HttpHeaders({
		'X-RapidAPI-Key': 'df9f879274msh4cb1a159ee30ef7p1470b2jsnfd3e0708f691',
		'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
    })
  }
  return this._http.get('https://car-api2.p.rapidapi.com/api/makes?direction=asc&sort=id', httpOptions);
}

getModel(modelo: string): Observable<any> {
  let httpOptions = {
    headers: new HttpHeaders({
      'X-RapidAPI-Key': 'df9f879274msh4cb1a159ee30ef7p1470b2jsnfd3e0708f691',
      'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
    })
  }
  return this._http.get("https://car-api2.p.rapidapi.com/api/models?make="+modelo+"&sort=name&direction=asc&year=2020&verbose=yes", httpOptions);
}
}
