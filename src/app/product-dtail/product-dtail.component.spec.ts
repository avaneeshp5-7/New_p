import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDtailComponent } from './product-dtail.component';

describe('ProductDtailComponent', () => {
  let component: ProductDtailComponent;
  let fixture: ComponentFixture<ProductDtailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDtailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDtailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
