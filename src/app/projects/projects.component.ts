import { AfterViewInit, Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { allProjectsFirst } from '../projectsfirst';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  allProjectsFirst: any = []; // Speichert die Daten von allProjects in einem Array
  @ViewChild('projects') private subComponent: ElementRef<HTMLElement> //ermöglicht den Zugriff auf eine untergeordnete Komponente hier projects
  projectsElement: HTMLElement; // der Variable werden die HTML Elemente zugewiesen
  

  constructor() { }

  ngOnInit(): void {
    allProjectsFirst.forEach((projectsfirst) => {
      this.allProjectsFirst.push(Object.assign({}, projectsfirst));
    });
  }

  ngAfterViewInit() {//wird einmalig nach der initalisierung ausgeführt 
    this.projectsElement = this.subComponent.nativeElement;
  }

  showCard(index: number) {
    this.projectsElement.querySelectorAll('.card').item(index).classList.remove('hide');
  }

  hideCard(index: number) {
    this.projectsElement.querySelectorAll('.card').item(index).classList.add('hide');
  }

}


