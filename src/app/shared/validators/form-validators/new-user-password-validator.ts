import { FormGroup } from '@angular/forms';

export function newUserPasswordValidator(formGroup: FormGroup) {
  const password = formGroup.get('password')?.value ?? '';
  const confirmPassword = formGroup.get('confirmPassword')?.value ?? '';

  if (password.trim() && confirmPassword.trim()) {
    return password === confirmPassword ? null : { differentPasswords: true };
  } else {
    return null;
  }
}
