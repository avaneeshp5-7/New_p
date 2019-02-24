import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducttemplateComponent } from './producttemplate.component';

describe('ProducttemplateComponent', () => {
  let component: ProducttemplateComponent;
  let fixture: ComponentFixture<ProducttemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducttemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducttemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
