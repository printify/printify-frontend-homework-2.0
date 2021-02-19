import { Component, Input, OnInit } from '@angular/core';
import { Blueprint } from 'src/app/models/blueprint';

@Component({
  selector: 'app-blueprints-grid',
  templateUrl: './blueprints-grid.component.html',
  styleUrls: ['./blueprints-grid.component.scss']
})
export class BlueprintsGridComponent implements OnInit {
  @Input() blueprints: Blueprint[];

  constructor() { }

  ngOnInit(): void {
  }

}
