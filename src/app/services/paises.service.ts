import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Welcome } from '../models/request';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) {}

  cargarPaises(){
    const url = 'https://api.covid19api.com/summary';
    return this.http.get<Welcome>(url);
  }
}
