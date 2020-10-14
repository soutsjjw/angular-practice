import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component1',
  templateUrl: './child-component1.component.html',
  styleUrls: ['./child-component1.component.scss']
})
export class ChildComponent1Component implements OnInit {

  public msg = 'child title';

  constructor() { }

  ngOnInit(): void {
  }

  getMsg() {
    alert('我是子组件的 getMsg 方法');
  }

}