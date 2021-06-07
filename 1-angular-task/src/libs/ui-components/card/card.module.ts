import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [...CardModule.COMPONENTS],
  exports: [...CardModule.COMPONENTS],
  imports: [CommonModule],
})
export class CardModule {
  static COMPONENTS = [CardComponent];
}
