import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { NewUserService } from './new-user.service';
import { first, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ExistentUserService {
  constructor(private newUser: NewUserService) {}

  public userAlreadyExists() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((data) => this.newUser.newUserValidate(data)),
        map(
          (userExists) => (userExists ? { existentUser: true } : null),
          first()
        )
      );
    };
  }
}
