import { Directive } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

/**
 * 跨字段驗證
 * @param controlGroup 控件組
 */
const nameAgeCrossValidator: ValidatorFn = (controlGroup: FormGroup): ValidationErrors | null => {

  // 獲取子控件的信息
  const name = controlGroup.get('name');
  const age = controlGroup.get('age');

  return name && age && name.value === 'lala' && age.value === '12' ? { 'nameAgeInvalid': true } : null;
};

@Directive({
  selector: '[appCrossFieldValidate]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CrossFieldValidateDirective, multi: true }]
})
export class CrossFieldValidateDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return nameAgeCrossValidator(control);
  }
}
