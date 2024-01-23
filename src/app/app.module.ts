import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AgregarTareasComponent } from './componentes/agregar-tareas/agregar-tareas.component';
import { EditarTareaComponent } from './componentes/editar-tarea/editar-tarea.component';
import { ListarTareasComponent } from './componentes/listar-tareas/listar-tareas.component';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoadingComponent } from './componentes/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AgregarTareasComponent,
    EditarTareaComponent,
    ListarTareasComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterOutlet,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
