import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewUser } from 'src/app/shared/models/new-user.model';
import { ExistentUserService } from 'src/app/shared/services/existent-user.service';
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
    private newUser: NewUserService,
    private existentUser: ExistentUserService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required]],
      userName: [
        '',
        [lowerCaseValidator, Validators.required],
        [this.existentUser.userAlreadyExists()],
      ],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  public submit(): void {
    console.log(this.form.value);
  }
}
