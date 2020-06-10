import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChangeDrugDialogComponent} from './change-drug-dialog.component';

describe('ChangeDrugDialogComponent', () => {
  let component: ChangeDrugDialogComponent;
  let fixture: ComponentFixture<ChangeDrugDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeDrugDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDrugDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
