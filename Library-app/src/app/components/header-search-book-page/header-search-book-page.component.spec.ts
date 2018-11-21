import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSearchBookPageComponent } from './header-search-book-page.component';

describe('HeaderSearchBookPageComponent', () => {
  let component: HeaderSearchBookPageComponent;
  let fixture: ComponentFixture<HeaderSearchBookPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSearchBookPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSearchBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
