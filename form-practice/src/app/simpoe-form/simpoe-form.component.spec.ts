import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpoeFormComponent } from './simpoe-form.component';

describe('SimpoeFormComponent', () => {
  let component: SimpoeFormComponent;
  let fixture: ComponentFixture<SimpoeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpoeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpoeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
