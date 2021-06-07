import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputComponent } from './input.component';

@NgModule({
  declarations: [...InputModule.COMPONENTS],
  exports: [...InputModule.COMPONENTS],
  imports: [CommonModule],
})
export class InputModule {
  static COMPONENTS = [InputComponent];
}
