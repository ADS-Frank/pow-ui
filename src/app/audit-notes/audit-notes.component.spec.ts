import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditNotesComponent } from './audit-notes.component';

describe('AuditNotesComponent', () => {
  let component: AuditNotesComponent;
  let fixture: ComponentFixture<AuditNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
