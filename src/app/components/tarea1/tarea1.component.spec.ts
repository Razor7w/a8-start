import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarea1Component } from './tarea1.component';

describe('Tarea1Component', () => {
  let component: Tarea1Component;
  let fixture: ComponentFixture<Tarea1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tarea1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tarea1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
