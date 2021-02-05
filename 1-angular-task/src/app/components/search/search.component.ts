import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  query: string = '';
  private querySubject = new Subject();
  private querySubscription: any = null;
  @Output() onsearch = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.querySubscription = this.querySubject.pipe(
      debounceTime(500)
    ).subscribe(() => {
      this.onsearch.emit(this.query)
    });
  }

  ngOnDestroy() {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }
  
  applySearch() {
    this.querySubject.next();
  }
}
