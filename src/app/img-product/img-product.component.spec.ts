import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgProductComponent } from './img-product.component';

describe('ImgProductComponent', () => {
  let component: ImgProductComponent;
  let fixture: ComponentFixture<ImgProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
