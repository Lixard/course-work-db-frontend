import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ChangeDoctorDialogComponent} from './change-doctor-dialog.component';

describe('ChangeDoctorDialogComponent', () => {
  let component: ChangeDoctorDialogComponent;
  let fixture: ComponentFixture<ChangeDoctorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeDoctorDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDoctorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
