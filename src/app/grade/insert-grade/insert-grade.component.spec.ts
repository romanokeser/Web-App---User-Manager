import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertGradeComponent } from './insert-grade.component';

describe('InsertGradeComponent', () => {
  let component: InsertGradeComponent;
  let fixture: ComponentFixture<InsertGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
