import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Values } from '../models/values';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {

  //sciezka do API
  private valuesUrl = 'https://localhost:5001/api/Values'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getValues(): Observable<Values> {
    return this.http.get<Values>(this.valuesUrl)
  }

constructor(private http: HttpClient) { }
}
