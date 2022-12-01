import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { DetailsAnimalComponent } from './details-animal/details-animal.component';

const routes: Routes = [
  {
    path: '',
    component: AnimalsListComponent,
  },
  {
    path: ':animalId',
    component: DetailsAnimalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalsRoutingModule {}
