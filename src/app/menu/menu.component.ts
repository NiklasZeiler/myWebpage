import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuIsOpen: boolean = false;
  localesList = [
    { code: "en-US", label: $localize`English` },
    { code: "de-CH", label: $localize`German` }
  ]


  constructor() { }



  ngOnInit(): void {


  }


  /**
   * set menuIsOpen to true, open menu and add class z-index to wrapper
   */
  menuOpenBtn() {
    this.menuIsOpen = true;
    (<HTMLElement>document.getElementById('wrapper')).classList.add('z-index');
  }


  /**
   * set menuIsOpen to false, close menu and remove class fade and z-index from wrapper
   */
  menuCloseBtn() {
    this.menuIsOpen = false;
    (<HTMLElement>document.getElementById('wrapper')).classList.remove('fade');
    (<HTMLElement>document.getElementById('wrapper')).classList.remove('z-index');

  }


  /**
   * set menuIsOpen to false, close responsive menu and remove class z-index from wrapper
   */
  closeResponseMenu() {
    this.menuIsOpen = false;
    (<HTMLElement>document.getElementById('wrapper')).classList.remove('z-index');

  }
}
