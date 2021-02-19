import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueprintsGridComponent } from './blueprints-grid.component';

describe('BlueprintsGridComponent', () => {
  let component: BlueprintsGridComponent;
  let fixture: ComponentFixture<BlueprintsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueprintsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueprintsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
