import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsAllComponent } from './requests-all.component';

describe('RequestsAllComponent', () => {
  let component: RequestsAllComponent;
  let fixture: ComponentFixture<RequestsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
