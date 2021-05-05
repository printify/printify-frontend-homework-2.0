import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Blueprint } from './models/blueprint';

@Injectable({
  providedIn: 'root',
})
export class BlueprintService {
  url = 'https://run.mocky.io/v3/b9e8f542-9816-4175-9165-9d65a8a481e7';
  // fail f9f98624-f1ad-4781-91cd-477baa05af34

  constructor(private http: HttpClient) {}

  getBlueprints(): Observable<Blueprint[]> {
    return this.http.get<Blueprint[]>(this.url)
        .pipe(tap((_) => {}));
  }

  getBlueprint(id: number): Observable<Blueprint> {
    const url = `${this.url}/?id=${id}`;

    return this.http.get<Blueprint>(url).pipe(tap((_) => {}));
  }

  handleError(reason: string) {
    // return (error: any): Observable<T> => {
    //     // TODO: send the error to remote logging infrastructure
    //     console.error(error); // log to console instead
    //     // TODO: better job of transforming error for user consumption
    //     this.log(`${operation} failed: ${error.message}`);
    //     // Let the app keep running by returning an empty result.
    //     return of(result as T);
  }
}
