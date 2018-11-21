import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBackPageComponent } from './header-back-page.component';

describe('HeaderBackPageComponent', () => {
  let component: HeaderBackPageComponent;
  let fixture: ComponentFixture<HeaderBackPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderBackPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBackPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
