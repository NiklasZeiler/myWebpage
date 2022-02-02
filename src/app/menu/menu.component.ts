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
    (<HTMLElement>document.getElementById('wrapper')).classList.add('z-index');
  }

  menuCloseBtn() {
    this.menuIsOpen = false;
    (<HTMLElement>document.getElementById('wrapper')).classList.remove('fade');
    (<HTMLElement>document.getElementById('wrapper')).classList.remove('z-index');

  }

  closeResponseMenu() {
    this.menuIsOpen = false;
    (<HTMLElement>document.getElementById('wrapper')).classList.remove('z-index');

  }
}
