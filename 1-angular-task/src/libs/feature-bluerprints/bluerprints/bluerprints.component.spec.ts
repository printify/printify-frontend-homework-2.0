import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BluerprintsComponent } from './bluerprints.component';

describe('BluerprintsComponent', () => {
  let component: BluerprintsComponent;
  let fixture: ComponentFixture<BluerprintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BluerprintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BluerprintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
