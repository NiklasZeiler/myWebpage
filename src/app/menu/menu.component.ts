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

  menuOpen() {
    this.menuIsOpen = true;
  }

  // menuClose() {
  //   this.menuIsOpen = false;
  // }
}
