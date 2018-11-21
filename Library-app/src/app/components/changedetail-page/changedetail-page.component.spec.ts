import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangedetailPageComponent } from './changedetail-page.component';

describe('ChangedetailPageComponent', () => {
  let component: ChangedetailPageComponent;
  let fixture: ComponentFixture<ChangedetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangedetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangedetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
