import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableDrawerComponent } from './expandable-drawer.component';

describe('ExpandableDrawerComponent', () => {
  let component: ExpandableDrawerComponent;
  let fixture: ComponentFixture<ExpandableDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandableDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandableDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
