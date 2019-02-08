import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObervComponent } from './oberv.component';

describe('ObervComponent', () => {
  let component: ObervComponent;
  let fixture: ComponentFixture<ObervComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObervComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObervComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
