import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueprintListComponent } from './blueprint-list.component';

describe('BlueprintListComponent', () => {
  let component: BlueprintListComponent;
  let fixture: ComponentFixture<BlueprintListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueprintListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueprintListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
