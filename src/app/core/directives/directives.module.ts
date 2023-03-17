import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OnlyNumberDirective } from './only-number/only-number.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [OnlyNumberDirective],
  exports: [OnlyNumberDirective],
})
export class DirectivesModule {}
