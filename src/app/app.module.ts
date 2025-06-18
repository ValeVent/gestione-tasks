import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaTaskComponent } from './pages/lista-task/lista-task.component';
import { AggiungiTaskComponent } from './pages/aggiungi-task/aggiungi-task.component';
import { DettaglioTaskComponent } from './pages/dettaglio-task/dettaglio-task.component';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaTaskComponent,
    AggiungiTaskComponent,
    DettaglioTaskComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
