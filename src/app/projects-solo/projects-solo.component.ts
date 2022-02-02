import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { allProjects } from '../projects';

@Component({
  selector: 'app-projects-solo',
  templateUrl: './projects-solo.component.html',
  styleUrls: ['./projects-solo.component.scss']
})
export class ProjectsSoloComponent implements OnInit, AfterViewInit {
  allProjects: any = []; // Speichert die Daten von allProjects in einem Array
  @ViewChild('projectsSolo') private subComponentSolo: ElementRef<HTMLElement> //ermöglicht den Zugriff auf eine untergeordnete Komponente hier projects
  projectsSoloElement: HTMLElement; // der Variable werden die HTML Elemente zugewiesen

  constructor() { }

  ngOnInit(): void {
    allProjects.forEach((project) => {
      this.allProjects.push(Object.assign({}, project));
    });
  }

  ngAfterViewInit() {//wird einmalig nach der initalisierung ausgeführt 
    this.projectsSoloElement = this.subComponentSolo.nativeElement;
  }

}
