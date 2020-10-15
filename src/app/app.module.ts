import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './components/xyz/xyz.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ClaseAComponent } from './components/clase-a/clase-a.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { Tarea1Component } from './components/tarea1/tarea1.component';
import { TrimPipe } from './pipes/trim.pipe';
import { FormsModule } from '@angular/forms';
import { MouseDirective } from './directives/handlerEvent/mouse.directive';
import { ClickDirective } from './directives/handlerEvent/click.directive';
import { HttpClientModule } from '@angular/common/http';
import { RutasComponent } from './components/rutas/rutas.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'tarea1', component: Tarea1Component },
  { path: 'clase', component: ClaseAComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    ToolbarComponent,
    ClaseAComponent,
    InicioComponent,
    Tarea1Component,
    TrimPipe,
    MouseDirective,
    ClickDirective,
    RutasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
