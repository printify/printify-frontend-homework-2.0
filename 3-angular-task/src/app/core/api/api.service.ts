import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { BlueprintResponse } from 'src/app/models/blueprint';

const baseURL = 'SOME_API';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly http = inject(HttpClient);

  loadBlueprints(): Observable<BlueprintResponse> {
    return this.http.get<BlueprintResponse>(baseURL);
  }
}
