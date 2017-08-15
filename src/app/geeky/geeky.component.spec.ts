import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeekyComponent } from './geeky.component';

describe('GeekyComponent', () => {
  let component: GeekyComponent;
  let fixture: ComponentFixture<GeekyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeekyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeekyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
