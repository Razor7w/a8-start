import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaseAComponent } from './clase-a.component';

describe('ClaseAComponent', () => {
  let component: ClaseAComponent;
  let fixture: ComponentFixture<ClaseAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaseAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaseAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
