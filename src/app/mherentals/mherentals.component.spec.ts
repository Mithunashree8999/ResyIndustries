import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MherentalsComponent } from './mherentals.component';

describe('MherentalsComponent', () => {
  let component: MherentalsComponent;
  let fixture: ComponentFixture<MherentalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MherentalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MherentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
