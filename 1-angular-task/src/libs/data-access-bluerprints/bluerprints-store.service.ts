import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blueprint } from '../../app/models/blueprint';
import { DataAccessBluerprintsModule } from './data-access-bluerprints.module';

// Get all Blueprints: https://run.mocky.io/v3/b9e8f542-9816-4175-9165-9d65a8a481e7
// Get 1 Blueprint: https://run.mocky.io/v3/c3a4c523-7e87-4f6f-b9a8-f501c053fd65?id=${id}
// Get 500 error for "Get all Blueprints": https://run.mocky.io/v3/f9f98624-f1ad-4781-91cd-477baa05af34

@Injectable({
  providedIn: DataAccessBluerprintsModule,
})
export class BluerprintsStoreService {
  public entites$: Observable<Blueprint>;
  constructor(private httpClient: HttpClient) {}

  public getEntities$(): Observable<Blueprint[]> {
    const url = 'https://run.mocky.io/v3/b9e8f542-9816-4175-9165-9d65a8a481e7';
    return this.httpClient.get<Blueprint[]>(url);
  }
}
