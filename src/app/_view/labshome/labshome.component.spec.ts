import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabshomeComponent } from './labshome.component';

describe('LabshomeComponent', () => {
  let component: LabshomeComponent;
  let fixture: ComponentFixture<LabshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabshomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
