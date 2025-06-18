import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTaskComponent } from './pages/lista-task/lista-task.component';
import { AggiungiTaskComponent } from './pages/aggiungi-task/aggiungi-task.component';
import { DettaglioTaskComponent } from './pages/dettaglio-task/dettaglio-task.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'aggiungi', component: AggiungiTaskComponent },
  { path: 'dettaglio/:id', component: DettaglioTaskComponent},
  { path: 'homepage', component: ListaTaskComponent },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
