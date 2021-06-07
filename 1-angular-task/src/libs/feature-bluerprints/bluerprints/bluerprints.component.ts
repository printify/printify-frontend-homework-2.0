import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Blueprint } from '../../../app/models/blueprint';
import { BluerprintsStoreService } from '../../data-access-bluerprints/bluerprints-store.service';

@Component({
  selector: 'app-bluerprints',
  templateUrl: './bluerprints.component.html',
  styleUrls: ['./bluerprints.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BluerprintsComponent implements OnInit {

  public entities$:any

  constructor(private store: BluerprintsStoreService) {
    this.entities$ = store.getEntities$();
  }

  ngOnInit(): void {
  }

}
