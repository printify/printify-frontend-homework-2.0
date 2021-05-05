import { Component, OnInit } from '@angular/core';
import { BlueprintService } from '../blueprint.service';
import { Blueprint } from '../models/blueprint';

@Component({
  selector: 'app-blueprint-list',
  templateUrl: './blueprint-list.component.html',
  styleUrls: ['./blueprint-list.component.scss']
})
export class BlueprintListComponent implements OnInit {
    orig: Blueprint[] = []
    blueprints: Blueprint[] = []
    q: string = ''

  constructor(
      private blueprintService: BlueprintService
  ) { }

  ngOnInit(): void {
    this.loadBlueprints()
  }

  loadBlueprints(): void {
    this.blueprintService.getBlueprints()
        .subscribe((blueprints: Blueprint[]) => {
            this.orig = blueprints
            this.blueprints = blueprints
        })
  }

  filterBlueprint(q: string) {
    const filter = q.trim().toLowerCase();

    this.blueprints = filter ? this.orig.filter((bl: Blueprint) => {
        return bl.name.toLowerCase().includes(q);
    }) : this.orig;
  }


}
