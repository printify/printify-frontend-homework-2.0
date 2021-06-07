import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BluerprintComponent } from './bluerprint.component';

describe('BluerprintComponent', () => {
  let component: BluerprintComponent;
  let fixture: ComponentFixture<BluerprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BluerprintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BluerprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
