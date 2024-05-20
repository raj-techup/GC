import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagonasiscenterComponent } from './diagonasiscenter.component';

describe('DiagonasiscenterComponent', () => {
  let component: DiagonasiscenterComponent;
  let fixture: ComponentFixture<DiagonasiscenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagonasiscenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagonasiscenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
