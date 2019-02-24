import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpassordComponent } from './newpassord.component';

describe('NewpassordComponent', () => {
  let component: NewpassordComponent;
  let fixture: ComponentFixture<NewpassordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpassordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpassordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
