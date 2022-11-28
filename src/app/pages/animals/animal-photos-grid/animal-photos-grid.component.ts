import { Component, Input, OnInit } from '@angular/core';
import { Animals } from 'src/app/shared/models/animals.model';

@Component({
  selector: 'app-animal-photos-grid',
  templateUrl: './animal-photos-grid.component.html',
  styleUrls: ['./animal-photos-grid.component.scss'],
})
export class AnimalPhotosGridComponent implements OnInit {
  @Input() public animals!: Animals;

  constructor() {}

  ngOnInit(): void {}
}
