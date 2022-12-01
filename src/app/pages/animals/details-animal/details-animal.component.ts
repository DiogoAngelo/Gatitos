import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from 'src/app/shared/models/animals.model';
import { AnimalsService } from 'src/app/shared/services/animals.service';

@Component({
  selector: 'app-details-animal',
  templateUrl: './details-animal.component.html',
  styleUrls: ['./details-animal.component.scss'],
})
export class DetailsAnimalComponent implements OnInit {
  public animalId = this.activatedRoute.snapshot.params['animalId'];
  public animal$!: Observable<Animal>;

  constructor(
    private animalsService: AnimalsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.animal$ = this.animalsService.searchById(this.animalId);
  }
}
