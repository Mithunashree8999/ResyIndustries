import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingdialogComponent } from './packingdialog.component';

describe('PackingdialogComponent', () => {
  let component: PackingdialogComponent;
  let fixture: ComponentFixture<PackingdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PackingdialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackingdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
