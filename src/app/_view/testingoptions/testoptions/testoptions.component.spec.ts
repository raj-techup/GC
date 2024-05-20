import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestoptionsComponent } from './testoptions.component';

describe('TestoptionsComponent', () => {
  let component: TestoptionsComponent;
  let fixture: ComponentFixture<TestoptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestoptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
