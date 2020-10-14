import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-child-component3',
  templateUrl: './child-component3.component.html',
  styleUrls: ['./child-component3.component.scss']
})
export class ChildComponent3Component implements OnInit {

  public storageMsg: string;

  constructor(private storage: StorageService) { }

  ngOnInit(): void {
  }

  getServiceMsg() {
    this.storageMsg = this.storage.getMsg();
  }

}
