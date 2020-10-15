import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { Tarea1Component } from './components/tarea1/tarea1.component';
import { ClaseAComponent } from './components/clase-a/clase-a.component';
import { RutasComponent } from './components/rutas/rutas.component';



// const routes: Routes = [];

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'tarea1', component: Tarea1Component },
  { path: 'clase', component: ClaseAComponent },
  { path: 'claserutas', component: RutasComponent },
  { path: 'claserutas/:id', component: RutasComponent },
  { path: '**', redirectTo: 'inicio', pathMatch: 'full'},
  { path: '', redirectTo: 'inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
