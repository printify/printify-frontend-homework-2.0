import {
  DestroyRef,
  Injectable,
  WritableSignal,
  computed,
  inject,
  signal,
} from '@angular/core';
import { BehaviorSubject, EMPTY, ReplaySubject, Subject } from 'rxjs';
import { catchError, map, switchMap, tap, mapTo } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ApiService } from 'src/app/core/api/api.service';
import { BlueprintResponse } from 'src/app/models/blueprint';
import { HttpErrorResponse } from '@angular/common/http';

export class BlueprintsState {
  blueprints: BlueprintResponse['data'];
  searchTerm: string;
  loading: boolean;
  error: string;
}

const initialState: BlueprintsState = {
  blueprints: [],
  searchTerm: '',
  error: '',
  loading: false,
};

@Injectable()
export class BlueprintStoreService {
  private readonly state: WritableSignal<BlueprintsState> =
    signal<BlueprintsState>(initialState);
  private readonly destroyRef = inject(DestroyRef);
  private readonly apiService = inject(ApiService);
  private readonly loadBlueprintSubject = new Subject<{ searchTerm: string }>();

  private readonly newProperty = new ReplaySubject();
  private readonly anotherProp = new BehaviorSubject<number>(0);

  readonly someTh = new ReplaySubject();

  readonly blueprints = computed(() => this.state().blueprints);

  constructor() {
    this.loadBlueprintSubject
      .pipe(
        mapTo(true),
        switchMap(() => {
          return this.apiService.loadBlueprints().pipe(
            tap((result) => {
              this.state.update((state) => ({
                ...state,
                blueprints: result.data,
              }));
            }),
            catchError((error: HttpErrorResponse) => {
              this.state.update((state) => ({
                ...state,
                error: error.message,
                blueprints: [],
              }));
              return EMPTY;
            })
          );
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe();
  }

  loadBlueprints(searchTerm: string) {
    this.loadBlueprintSubject.next({ searchTerm });
  }
}
