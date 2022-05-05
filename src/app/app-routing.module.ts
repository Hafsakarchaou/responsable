import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentsComponent } from './agents/agents.component';
import { AjoutComponent } from './ajout/ajout.component';
import { AvisComponent } from './avis/avis.component';
import { DecisionsComponent } from './decisions/decisions.component';
import { DemandesComponent } from './demandes/demandes.component';
import { ModificationAgentComponent } from './modification-agent/modification-agent.component';
import { ProfilComponent } from './profil/profil.component';
import { DecisionComponent } from './decision/decision.component';
import { AviComponent } from './avi/avi.component';
import { ConsulterdecComponent } from './consulterdec/consulterdec.component';
import { ConsulterdemandeComponent } from './consulterdemande/consulterdemande.component';

const routes: Routes = [
  {path:"", component:ProfilComponent},
  {path:"agents", component:AgentsComponent},
  {path:"ajout", component:AjoutComponent},
  {path:"demandes", component:DemandesComponent},
  {path:"avis", component:AvisComponent},
  {path:"decisions", component:DecisionsComponent},
  {path:"decision",component:DecisionComponent},
  {path:"avi",component:AviComponent},
  {path:"consulterdec",component:ConsulterdecComponent},
  {path:"modification-agent", component:ModificationAgentComponent},
  {path:"decision",component:DecisionComponent},
  {path:"avi",component:AviComponent},
  {path:"consulterdec",component:ConsulterdecComponent},
  {path:"modification-agent", component:ModificationAgentComponent},
  {path:"consulterdemande", component:ConsulterdemandeComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
