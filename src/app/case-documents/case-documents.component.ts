import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-documents',
  templateUrl: './case-documents.component.html',
  styleUrls: ['./case-documents.component.css']
})
export class CaseDocumentsComponent implements OnInit {

  documents: Document[] = [
    {
      name: 'Fido',
      description: 'a dog',
      status: 'good boy',
      statusChangeDate: new Date(-1).toDateString(),
      lastUpdate: new Date().toDateString(),
      originalScanDate: new Date().toDateString()
    },
    {
      name: 'Mittens',
      description: 'a cat',
      status: 'booo, dogs are better.',
      statusChangeDate: new Date(124124124124).toDateString(),
      lastUpdate: new Date().toDateString(),
      originalScanDate: new Date().toDateString()
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Document {
  name: string;
  description: string;
  status: string;
  statusChangeDate: string;
  lastUpdate: string;
  originalScanDate: string;
}