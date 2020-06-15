import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ExportDoctorPatientsDialogComponent} from './export-doctor-patients-dialog.component';

describe('ExportDoctorPatientsDialogComponent', () => {
  let component: ExportDoctorPatientsDialogComponent;
  let fixture: ComponentFixture<ExportDoctorPatientsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExportDoctorPatientsDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportDoctorPatientsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
