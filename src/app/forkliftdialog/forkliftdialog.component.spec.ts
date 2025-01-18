import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkliftdialogComponent } from './forkliftdialog.component';

describe('ForkliftdialogComponent', () => {
  let component: ForkliftdialogComponent;
  let fixture: ComponentFixture<ForkliftdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForkliftdialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForkliftdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
