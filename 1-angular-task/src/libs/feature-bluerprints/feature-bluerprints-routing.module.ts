import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BluerprintComponent } from './bluerprint/bluerprint.component';
import { BluerprintsComponent } from './bluerprints/bluerprints.component';

const routes: Routes = [
  {
    path: '',
    component: BluerprintsComponent,
  },
  {
    path: ':id',
    component: BluerprintComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureBluerprintsRoutingModule {}
