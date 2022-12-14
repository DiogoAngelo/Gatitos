import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalsRoutingModule } from './animals-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { AnimalCardComponent } from './animal-card/animal-card.component';
import { AnimalComponent } from './animal/animal.component';
import { AnimalPhotosGridComponent } from './animal-photos-grid/animal-photos-grid.component';
import { DetailsAnimalComponent } from './details-animal/details-animal.component';
import { CommentsComponent } from './details-animal/comments/comments.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AnimalsListComponent,
    AnimalCardComponent,
    AnimalComponent,
    AnimalPhotosGridComponent,
    DetailsAnimalComponent,
    CommentsComponent,
  ],
  imports: [
    CommonModule,
    AnimalsRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
  ],
  exports: [
    AnimalsListComponent,
    AnimalCardComponent,
    AnimalComponent,
    DetailsAnimalComponent,
  ],
})
export class AnimalsModule {}
