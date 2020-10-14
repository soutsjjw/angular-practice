import { Component, OnInit } from '@angular/core';

interface Person {
  name: string;
  age: number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public title = '我是 title 屬性值';
  public styleProperty = '<b>我是包含 html 標簽的屬性</b>';
  public fontColor = 'red';
  public url = 'https://youtube.com';
  public name: string;
  public msg: string;
  public refMsg: string;
  public inlineStyle: {};
  public currentStyles: {};
  public flag = true;
  public products = [{
    'name': 'lalala',
    'price': '$200'
  }, {
    'name': 'hehehe',
    'price': '$400'
  }, {
    'name': 'wuwuwu',
    'price': '$120'
  }, {
    'name': 'xixi',
    'price': '$570'
  }];
  public config = '';
  //public empty: string = null;
  public obj: Person;
  public personAge: number;
  public date = new Date();

  constructor() { }

  ngOnInit(): void {
    this.setInlineStyle();
    this.setCurrentStyles();
    this.setAccordion();
  }

  getUser() {
    alert('11111111');
  }

  getMsg(event: KeyboardEvent) {
    console.log(event);
    this.msg = (event.target as HTMLInputElement).value;
  }

  getRefMsg(msg: string) {
    this.refMsg = msg;
  }

  setInlineStyle() {
    this.inlineStyle = {
      'text-red': true,
      'bg-blue': false,
    };
  }

  setCurrentStyles() {
    this.currentStyles = {
      'font-style': 'italic',
      'font-weight': 'bold',
      'font-size': '24px'
    };
  }

  removeElement() {
    this.flag = false;
  }

  trackByIndex(index: number, item: any): string {
    return item.price;
  }

  addProduct() {
    this.products = [{
      'name': 'lalala',
      'price': '$200'
    }, {
      'name': 'hehehe',
      'price': '$400'
    }, {
      'name': 'wuwuwu',
      'price': '$120'
    }, {
      'name': 'xixi',
      'price': '$570'
    }, {
      'name': 'lululu',
      'price': '$' + (Math.random() * 100).toFixed()
    }];
  }

  setAccordion() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
  }

}
