import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'bluerprints',
  },
  {
    path: 'bluerprints',
    loadChildren: (): Promise<Type<any>> =>
      import('../libs/feature-bluerprints').then(
        (module) => module.FeatureBluerprintsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
