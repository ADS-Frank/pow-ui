import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { 
  MdButtonModule,
  MdCardModule,
  MdToolbarModule,
  MdIconModule,
  MdMenuModule,
  MdTabsModule,
  MdGridListModule,
  MdInputModule,
  MdSelectModule,
  MdOptionModule,
  MdButtonToggleModule,
  MdCheckboxModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BottomButtonsComponent } from './bottom-buttons/bottom-buttons.component';
import { WindowComponent } from './window/window.component';
import { TabsComponent } from './tabs/tabs.component';
import { InjuredPartyTabComponent } from './injured-party-tab/injured-party-tab.component';
import { AuditNotesComponent } from './audit-notes/audit-notes.component';
import { DisputedAccountsSummaryComponent } from './disputed-accounts-summary/disputed-accounts-summary.component';
import { ExpandableDrawerComponent } from './expandable-drawer/expandable-drawer.component';
import { CaseDocumentsComponent } from './case-documents/case-documents.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    BottomButtonsComponent,
    WindowComponent,
    TabsComponent,
    InjuredPartyTabComponent,
    AuditNotesComponent,
    DisputedAccountsSummaryComponent,
    ExpandableDrawerComponent,
    CaseDocumentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdMenuModule,
    MdTabsModule,
    MdGridListModule,
    MdInputModule,
    MdOptionModule,
    MdButtonToggleModule,
    MdSelectModule,
    MdCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
