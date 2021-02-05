import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private http: HttpClient) { }

  getProductsList() {
    return this.http.get('https://run.mocky.io/v3/b9e8f542-9816-4175-9165-9d65a8a481e7');
  }
}
