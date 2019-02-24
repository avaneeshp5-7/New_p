import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoblileComponent } from './moblile.component';

describe('MoblileComponent', () => {
  let component: MoblileComponent;
  let fixture: ComponentFixture<MoblileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoblileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoblileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
