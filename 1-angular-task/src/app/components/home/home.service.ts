import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { BlueprintsService } from 'src/app/services/blueprints.service';

@Injectable()
export class HomeService {
  private query = new BehaviorSubject<string>(null as any);

  readonly blueprints$ = this.blueprintsService.getBlueprints()
    .pipe(
      switchMap(blueprints => this.query.pipe(
        map(query => query?.toLowerCase()),
        map((query: string) => {
          return query
            ? blueprints.filter(blueprint => blueprint.name.toLowerCase().includes(query))
            : blueprints;
        })
      ))
    );

  constructor(private blueprintsService: BlueprintsService) {}

  search(query: string) {
    this.query.next(query);
  }
}
