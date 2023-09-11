import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistrationFormComponent } from './resistration-form.component';

describe('ResistrationFormComponent', () => {
  let component: ResistrationFormComponent;
  let fixture: ComponentFixture<ResistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResistrationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
