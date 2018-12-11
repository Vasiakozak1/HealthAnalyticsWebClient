import { FormGroup, FormControl, NgForm, FormGroupDirective } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export function checkPasswords(formGroup: FormGroup) {
    const password = formGroup.controls.password;
    const confirmPassword = formGroup.controls.passwordRepeat;
    return password.value === confirmPassword.value ? null : { notSame: true };
}
export class PasswordRepeatErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
      const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
      const passwordIsEqual = control.parent.controls['password'].value === control.parent.controls['passwordRepeat'].value;
      return (invalidCtrl || invalidParent) && !passwordIsEqual;
    }
  }
