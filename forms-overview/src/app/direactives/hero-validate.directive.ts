import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appHeroValidate]',
  // 將指令注冊到 NG_VALIDATORS 使用 multi: true 將該驗證器添加到現存的驗證器集合中
  providers: [{ provide: NG_VALIDATORS, useExisting: HeroValidateDirective, multi: true }]
})
export class HeroValidateDirective {

  constructor() { }

  /**
   * 對指定的控件執行同步驗證方法
   * @param control 
   */
  validate(control: AbstractControl): ValidationErrors | null {
    return control.value === 'lala' ? { 'nameInvalid': true } : null;
  }

}
