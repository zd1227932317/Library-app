import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDetailPageComponent } from './person-detail-page.component';

describe('PersonDetailPageComponent', () => {
  let component: PersonDetailPageComponent;
  let fixture: ComponentFixture<PersonDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
