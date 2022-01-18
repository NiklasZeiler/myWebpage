import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSoloComponent } from './about-solo.component';

describe('AboutSoloComponent', () => {
  let component: AboutSoloComponent;
  let fixture: ComponentFixture<AboutSoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSoloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
