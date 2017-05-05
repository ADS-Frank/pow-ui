import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputedAccountsSummaryComponent } from './disputed-accounts-summary.component';

describe('DisputedAccountsSummaryComponent', () => {
  let component: DisputedAccountsSummaryComponent;
  let fixture: ComponentFixture<DisputedAccountsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisputedAccountsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputedAccountsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
