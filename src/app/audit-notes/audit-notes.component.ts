import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audit-notes',
  templateUrl: './audit-notes.component.html',
  styleUrls: ['./audit-notes.component.css']
})
export class AuditNotesComponent implements OnInit {

  entries: Entry[] = [
    {
      timestamp: new Date(19991245125125).toDateString(),
      racf: 'A693019',
      action: 'ADD',
      comments: 'Moc comments here. It\' friday! WOOOOH'
    },
     {
      timestamp: new Date(19991241312).toDateString(),
      racf: 'A693019',
      action: 'DELETE',
      comments: 'These dates are strange.'
    },
     {
      timestamp: new Date(19991241312 + 1000).toDateString(),
      racf: 'A234559',
      action: 'UPDATE',
      comments: 'Added some more things.'
    },
     {
      timestamp: new Date(19991241312 - 1000).toDateString(),
      racf: 'A693052',
      action: 'LUNCH',
      comments: 'Went to panera.'
    },
     {
      timestamp: new Date(12312312312344).toDateString(),
      racf: 'A392852',
      action: 'COFFEE',
      comments: 'Triple whip double frappe mocha latte on the rocks'
    },
     {
      timestamp: new Date(19991245125125).toDateString(),
      racf: 'A693019',
      action: 'ADD',
      comments: 'Moc comments here. It\' friday! WOOOOH'
    },
     {
      timestamp: new Date(19991241312).toDateString(),
      racf: 'A693019',
      action: 'DELETE',
      comments: 'These dates are strange.'
    },
     {
      timestamp: new Date(19991241312 + 1000).toDateString(),
      racf: 'A234559',
      action: 'UPDATE',
      comments: 'Added some more things.'
    },
     {
      timestamp: new Date(19991241312 - 1000).toDateString(),
      racf: 'A693052',
      action: 'LUNCH',
      comments: 'Went to panera.'
    },
     {
      timestamp: new Date(12312312312344).toDateString(),
      racf: 'A392852',
      action: 'COFFEE',
      comments: 'Triple whip double frappe mocha latte on the rocks'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Entry {
  timestamp: string;
  racf: string;
  action: string;
  comments: string;
}