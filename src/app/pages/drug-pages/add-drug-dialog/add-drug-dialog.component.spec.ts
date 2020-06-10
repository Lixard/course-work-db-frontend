import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddDrugDialogComponent} from './add-drug-dialog.component';

describe('AddDrugDialogComponent', () => {
  let component: AddDrugDialogComponent;
  let fixture: ComponentFixture<AddDrugDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddDrugDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDrugDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
