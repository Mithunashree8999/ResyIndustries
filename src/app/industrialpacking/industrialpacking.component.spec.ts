import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialpackingComponent } from './industrialpacking.component';

describe('IndustrialpackingComponent', () => {
  let component: IndustrialpackingComponent;
  let fixture: ComponentFixture<IndustrialpackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndustrialpackingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustrialpackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
