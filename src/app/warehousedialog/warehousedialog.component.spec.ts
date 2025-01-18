import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehousedialogComponent } from './warehousedialog.component';

describe('WarehousedialogComponent', () => {
  let component: WarehousedialogComponent;
  let fixture: ComponentFixture<WarehousedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WarehousedialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehousedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
