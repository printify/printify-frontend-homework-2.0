import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Blueprint } from 'src/app/models/blueprint';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  query$ = new Subject<string | null>();
  query: string;
  blueprintItems$: Observable<Blueprint[]> =  this.httpService.getAllBlueprints()

  constructor(
    private httpService: HttpService
  ) { }

  handleUserInput(e: any): void {
    const v = e.target.value;
    this.query$.next( v ? v : '');
  }
}
