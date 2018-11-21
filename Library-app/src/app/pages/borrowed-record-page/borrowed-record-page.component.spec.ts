import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowedRecordPageComponent } from './borrowed-record-page.component';

describe('BorrowedRecordPageComponent', () => {
  let component: BorrowedRecordPageComponent;
  let fixture: ComponentFixture<BorrowedRecordPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowedRecordPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowedRecordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
