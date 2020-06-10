import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChangeDiagnosisDialogComponent} from './change-diagnosis-dialog.component';

describe('ChangeDiagnosisDialogComponent', () => {
  let component: ChangeDiagnosisDialogComponent;
  let fixture: ComponentFixture<ChangeDiagnosisDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeDiagnosisDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDiagnosisDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
