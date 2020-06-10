import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChangePatientDialogComponent} from './change-patient-dialog.component';

describe('ChangePatientDialogComponent', () => {
  let component: ChangePatientDialogComponent;
  let fixture: ComponentFixture<ChangePatientDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChangePatientDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePatientDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
