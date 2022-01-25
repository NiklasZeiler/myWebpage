import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuIsOpen: boolean = false;

  constructor() { }



  ngOnInit(): void {

  }

  menuOpenBtn() {
    this.menuIsOpen = true;
  }

  menuCloseBtn() {
    this.menuIsOpen = false;
  }

  closeResponseMenu() {
    (<HTMLElement>document.getElementById('wrapper')).classList.add('hide');
    this.menuIsOpen = false;
  }

  removeHide() {
    (<HTMLElement>document.getElementById('wrapper')).classList.remove('hide');
    this.menuIsOpen = true;
  }
}
