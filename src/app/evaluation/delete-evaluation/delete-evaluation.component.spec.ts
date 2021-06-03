import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEvaluationComponent } from './delete-evaluation.component';

describe('DeleteEvaluationComponent', () => {
  let component: DeleteEvaluationComponent;
  let fixture: ComponentFixture<DeleteEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
