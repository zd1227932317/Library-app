import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSearchPageComponent } from './header-search-page.component';

describe('HeaderSearchPageComponent', () => {
  let component: HeaderSearchPageComponent;
  let fixture: ComponentFixture<HeaderSearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
