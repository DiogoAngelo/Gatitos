import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalsRoutingModule } from './animals-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [AnimalsListComponent],
  imports: [CommonModule, AnimalsRoutingModule, ComponentsModule],
  exports: [AnimalsListComponent],
})
export class AnimalsModule {}
