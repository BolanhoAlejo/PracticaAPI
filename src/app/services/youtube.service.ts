import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private _http: HttpClient) { }

getVideos(text: string): Observable<any> {
  let httpOptions = {
    headers: new HttpHeaders({
      'x-rapidapi-key': 'df9f879274msh4cb1a159ee30ef7p1470b2jsnfd3e0708f691',
      'x-rapidapi-host': 'youtube-v2.p.rapidapi.com'
    })
  }
  return this._http.get('https://youtube-v2.p.rapidapi.com/search/?query='+text+'&lang=en&order_by=this_month&country=us', httpOptions);
}

}
