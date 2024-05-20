import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadtestComponent } from './downloadtest.component';

describe('DownloadtestComponent', () => {
  let component: DownloadtestComponent;
  let fixture: ComponentFixture<DownloadtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadtestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
