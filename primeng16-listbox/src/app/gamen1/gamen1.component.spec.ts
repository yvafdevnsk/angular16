import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gamen1Component } from './gamen1.component';

describe('Gamen1Component', () => {
  let component: Gamen1Component;
  let fixture: ComponentFixture<Gamen1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Gamen1Component]
    });
    fixture = TestBed.createComponent(Gamen1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
