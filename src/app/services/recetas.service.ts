import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  constructor(private _http: HttpClient) { }

getRecetas(tags: string): Observable<any> {
  let httpOptions = {
    headers: new HttpHeaders({
      'x-rapidapi-key': 'df9f879274msh4cb1a159ee30ef7p1470b2jsnfd3e0708f691',
      'x-rapidapi-host': 'tasty.p.rapidapi.com'
    })
  }
  return this._http.get('https://tasty.p.rapidapi.com/recipes/list?from=0&size=100&tags='+tags, httpOptions);
}

}
