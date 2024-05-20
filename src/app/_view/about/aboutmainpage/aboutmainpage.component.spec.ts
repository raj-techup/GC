import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmainpageComponent } from './aboutmainpage.component';

describe('AboutmainpageComponent', () => {
  let component: AboutmainpageComponent;
  let fixture: ComponentFixture<AboutmainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutmainpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutmainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
