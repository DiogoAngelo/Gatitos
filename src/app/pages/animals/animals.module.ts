import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalsRoutingModule } from './animals-routing.module';

@NgModule({
  declarations: [AnimalsListComponent],
  imports: [CommonModule, AnimalsRoutingModule],
  exports: [AnimalsListComponent],
})
export class AnimalsModule {}
