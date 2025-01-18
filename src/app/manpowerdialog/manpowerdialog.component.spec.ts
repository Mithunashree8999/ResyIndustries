import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManpowerdialogComponent } from './manpowerdialog.component';

describe('ManpowerdialogComponent', () => {
  let component: ManpowerdialogComponent;
  let fixture: ComponentFixture<ManpowerdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManpowerdialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManpowerdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
