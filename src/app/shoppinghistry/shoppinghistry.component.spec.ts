import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppinghistryComponent } from './shoppinghistry.component';

describe('ShoppinghistryComponent', () => {
  let component: ShoppinghistryComponent;
  let fixture: ComponentFixture<ShoppinghistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppinghistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppinghistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
