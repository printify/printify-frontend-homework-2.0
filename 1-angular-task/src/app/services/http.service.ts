import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blueprint } from '../models/blueprint';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http:HttpClient
  ) { }

  // https://run.mocky.io/v3/b9e8f542-9816-4175-9165-9d65a8a481e7

  getAllBlueprints(): Observable<Blueprint[]> {
    return this.http.get<Blueprint[]>('https://run.mocky.io/v3/b9e8f542-9816-4175-9165-9d65a8a481e7')
  }
}
