import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'base-form-validators',
  templateUrl: './form-validators.component.html',
})
export class FormValidatorsComponent implements OnInit {
  @Input() control!: AbstractControl;
  constructor() {}

  ngOnInit(): void {}
}
