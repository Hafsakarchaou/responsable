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

const routes: Routes = [
  {path:"", component:ProfilComponent},
  {path:"agents", component:AgentsComponent},
  {path:"ajout", component:AjoutComponent},
  {path:"demandes", component:DemandesComponent},
  {path:"avis", component:AvisComponent},
  {path:"decisions", component:DecisionsComponent},
<<<<<<< HEAD
  {path:"decision",component:DecisionComponent},
  {path:"avi",component:AviComponent},
  {path:"consulterdec",component:ConsulterdecComponent},
=======
  {path:"modification-agent", component:ModificationAgentComponent}
>>>>>>> 5f07c3d619dc852617504c2e1e628d90606347d2
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
