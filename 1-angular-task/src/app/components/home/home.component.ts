import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService]
})
export class HomeComponent {
  blueprints$ = this.homeService.blueprints$;

  constructor(private homeService: HomeService) { }

  onSearch(query: string) {
    this.homeService.search(query);
  }
}
