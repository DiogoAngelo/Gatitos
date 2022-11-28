import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const API: string = environment.apiUrl;

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss'],
})
export class AnimalComponent implements OnInit {
  private originalUrl: string = '';

  @Input() public description: string = '';
  @Input() public set url(url: string) {
    if (url.startsWith('data')) {
      this.originalUrl = url;
    } else {
      this.originalUrl = `${API}/imgs/${url}`;
    }
  }

  public get url(): string {
    return this.originalUrl;
  }

  constructor() {}

  ngOnInit(): void {}
}
