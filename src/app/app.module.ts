import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebrComponent } from './sidebr/sidebr.component';
import { ProfilComponent } from './profil/profil.component';
import { AjoutComponent } from './ajout/ajout.component';
import { AgentsComponent } from './agents/agents.component';
import { DemandesComponent } from './demandes/demandes.component';
import { AvisComponent } from './avis/avis.component';
import { DecisionsComponent } from './decisions/decisions.component';
import { QuitterComponent } from './quitter/quitter.component';
import { MaincComponent } from './mainc/mainc.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { DecisionComponent } from './decision/decision.component';
import { AviComponent } from './avi/avi.component';
import { ConsulterdecComponent } from './consulterdec/consulterdec.component';
import { ModificationAgentComponent } from './modification-agent/modification-agent.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebrComponent,
    ProfilComponent,
    AjoutComponent,
    AgentsComponent,
    DemandesComponent,
    AvisComponent,
    DecisionsComponent,
    QuitterComponent,
    MaincComponent,
    DecisionComponent,
    AviComponent,
    ConsulterdecComponent,
    ModificationAgentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
