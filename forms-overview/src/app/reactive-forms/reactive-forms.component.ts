import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';

/**
 * 自定義驗證方法
 * @param name 
 */
function validatorName(name: FormControl) {
  return name.value === 'lala' ? { nameinvalid: true } : null;
}

/**
 * 跨字段驗證
 * @param controlGroup 控件組
 */
const nameAgeCrossValidator: ValidatorFn = (controlGroup: FormGroup): ValidationErrors | null => {

  // 獲取子控件的信息
  const name = controlGroup.get('name');
  const age = controlGroup.get('age');

  return name && age && name.value === 'lala' && age.value === 12 ? { 'nameAgeInvalid': true } : null;
};

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  // 定義屬性用來承接 FormControl 實例
  //public name = new FormControl('');

  /*
  public profileForm = new FormGroup({
    name: new FormControl('啦啦啦'),
    age: new FormControl(12),
    address: new FormGroup({
      province: new FormControl('北京市'),
      city: new FormControl('北京'),
      district: new FormControl('朝陽區'),
      street: new FormControl('三里屯街道')
    })
  });
  */

  constructor(private formBuilder: FormBuilder) { }

  public profileForm = this.formBuilder.group({
    name: ['', [
      Validators.required,
      Validators.minLength(4),
      validatorName // 添加自定義驗證方法
    ]],
    age: [12],
    address: this.formBuilder.group({
      province: ['北京市'],
      city: ['北京'],
      district: ['朝陽區'],
      street: ['三里屯街道']
    })
  }, {
    validators: [nameAgeCrossValidator] // 添加針對控件組的驗證器
  });

  // 添加需要驗證控件 getter 方法，用來在模板中獲取狀態值
  get name() {
    return this.profileForm.get('name');
  }

  ngOnInit(): void {
  }

  /*
  getName() {
    alert(this.name.value);
  }

  setName() {
    this.name.setValue(1111111);
  }
  */

  submit() {
    alert(JSON.stringify(this.profileForm.value));
  }

  updateProfile() {
    // 需要更新全部的数据
    // this.profileForm.setValue({
    //   name: '423'
    // });
    this.profileForm.patchValue({
      name: '12345'
    });
  }

}
