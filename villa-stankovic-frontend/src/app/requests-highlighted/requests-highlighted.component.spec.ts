import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsHighlightedComponent } from './requests-highlighted.component';

describe('RequestsHighlightedComponent', () => {
  let component: RequestsHighlightedComponent;
  let fixture: ComponentFixture<RequestsHighlightedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestsHighlightedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestsHighlightedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
