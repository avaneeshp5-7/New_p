import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchagedetailsComponent } from './purchagedetails.component';

describe('PurchagedetailsComponent', () => {
  let component: PurchagedetailsComponent;
  let fixture: ComponentFixture<PurchagedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchagedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchagedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
