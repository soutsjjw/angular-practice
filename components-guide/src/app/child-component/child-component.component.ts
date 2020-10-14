import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {

  // 獲取父組件的數據
  @Input() parentGetMsg: any;

  // 使用 setter 對父組件的數據進行深加工
  private _title: string;

  @Input()
  set parentTitle(title: string) {
    this._title = (title && title.trim()) || '父組件的 title 屬性值為空';
  }
  get parentTitle(): string {
    return this._title;
  }

  constructor() { }

  ngOnInit(): void {
  }

  runParentFunc() {
    this.parentGetMsg();
  }

}
