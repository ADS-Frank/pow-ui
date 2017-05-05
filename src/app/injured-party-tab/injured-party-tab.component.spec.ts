import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjuredPartyTabComponent } from './injured-party-tab.component';

describe('InjuredPartyTabComponent', () => {
  let component: InjuredPartyTabComponent;
  let fixture: ComponentFixture<InjuredPartyTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjuredPartyTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjuredPartyTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
