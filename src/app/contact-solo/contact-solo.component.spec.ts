import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSoloComponent } from './contact-solo.component';

describe('ContactSoloComponent', () => {
  let component: ContactSoloComponent;
  let fixture: ComponentFixture<ContactSoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactSoloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
