import {FormControl} from '@angular/forms';

export function validateDuration(ctrl: FormControl) {


  // Validators.required,
  //   Validators.pattern('[0-9]+')

  // const numValue = parseInt(ctrl.value, 10);
  const numValue = parseInt(ctrl.value, 10);
  const valid = !isNaN(ctrl.value) && numValue < 10;

  return valid ? null : {
    validateDuration: {
      valid: false
    }
  };

}
