import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcdialogComponent } from './amcdialog.component';

describe('AmcdialogComponent', () => {
  let component: AmcdialogComponent;
  let fixture: ComponentFixture<AmcdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AmcdialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmcdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
