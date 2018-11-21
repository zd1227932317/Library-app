import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepasswordPagesComponent } from './changepassword-pages.component';

describe('ChangepasswordPagesComponent', () => {
  let component: ChangepasswordPagesComponent;
  let fixture: ComponentFixture<ChangepasswordPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangepasswordPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepasswordPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
