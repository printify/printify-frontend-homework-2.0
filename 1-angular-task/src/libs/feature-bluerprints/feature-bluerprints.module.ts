import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataAccessBluerprintsModule } from '../data-access-bluerprints/data-access-bluerprints.module';
import { CardModule } from '../ui-components/card/card.module';
import { InputModule } from '../ui-components/input/input.module';
import { BluerprintComponent } from './bluerprint/bluerprint.component';
import { BluerprintsComponent } from './bluerprints/bluerprints.component';
import { FeatureBluerprintsRoutingModule } from './feature-bluerprints-routing.module';

@NgModule({
  declarations: [BluerprintsComponent, BluerprintComponent],
  imports: [
    CommonModule,
    FeatureBluerprintsRoutingModule,
    CardModule,
    InputModule,
    DataAccessBluerprintsModule,
  ],
})
export class FeatureBluerprintsModule {}
