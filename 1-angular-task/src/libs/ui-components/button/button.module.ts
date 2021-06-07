import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [...ButtonModule.COMPONENTS],
  exports: [...ButtonModule.COMPONENTS],
  imports: [CommonModule],
})
export class ButtonModule {
  static COMPONENTS = [ButtonComponent];
}
