import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component2',
  templateUrl: './child-component2.component.html',
  styleUrls: ['./child-component2.component.scss']
})
export class ChildComponent2Component implements OnInit {

  public msg = 'child title';

  @Output() childEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendMsg() {
    this.childEmitter.emit(this.msg);
  }

}
