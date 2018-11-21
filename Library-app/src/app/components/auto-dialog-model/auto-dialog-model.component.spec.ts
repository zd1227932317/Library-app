import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoDialogModelComponent } from './auto-dialog-model.component';

describe('AutoDialogModelComponent', () => {
  let component: AutoDialogModelComponent;
  let fixture: ComponentFixture<AutoDialogModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoDialogModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoDialogModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
