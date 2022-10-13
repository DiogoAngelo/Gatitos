import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUser } from 'src/app/shared/models/new-user.model';
import { NewUserService } from 'src/app/shared/services/new-user.service';
import { lowerCaseValidator } from 'src/app/shared/validators/custom-validators/lower-case.validator';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private newUser: NewUserService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required]],
      userName: ['', [lowerCaseValidator, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  public submit(): void {
    const valor = this.form.getRawValue() as NewUser;
    console.log(valor);
    console.log(this.form.value);
  }
}
