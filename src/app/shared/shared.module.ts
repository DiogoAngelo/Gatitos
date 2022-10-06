import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormValidatorsComponent } from './validators/form-validators/form-validators.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormValidatorsComponent],
  imports: [CommonModule],
  exports: [FormsModule, ReactiveFormsModule, FormValidatorsComponent],
})
export class SharedModule {}
