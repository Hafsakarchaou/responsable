import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentsComponent } from './agents/agents.component';
import { AjoutComponent } from './ajout/ajout.component';
import { AvisComponent } from './avis/avis.component';
import { DecisionsComponent } from './decisions/decisions.component';
import { DemandesComponent } from './demandes/demandes.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  {path:"", component:ProfilComponent},
  {path:"agents", component:AgentsComponent},
  {path:"ajout", component:AjoutComponent},
  {path:"demandes", component:DemandesComponent},
  {path:"avis", component:AvisComponent},
  {path:"decisions", component:DecisionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
