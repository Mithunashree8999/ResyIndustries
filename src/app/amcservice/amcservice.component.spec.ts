import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcserviceComponent } from './amcservice.component';

describe('AmcserviceComponent', () => {
  let component: AmcserviceComponent;
  let fixture: ComponentFixture<AmcserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AmcserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmcserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
