import { Component, Input, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() search = new EventEmitter();

  query = new FormControl('');

  private searchSubscription$: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.searchSubscription$ = this.query.valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(400)
      ).subscribe(value => this.search.emit(value));
  }

  ngOnDestroy() {
    this.searchSubscription$.unsubscribe();
  }

}
