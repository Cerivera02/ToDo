import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgregarTareasComponent } from './componentes/agregar-tareas/agregar-tareas.component';
import { EditarTareaComponent } from './componentes/editar-tarea/editar-tarea.component';
import { ListarTareasComponent } from './componentes/listar-tareas/listar-tareas.component';

export const routes: Routes = [

  {path: '', pathMatch:'full', redirectTo:'listar-tarea'},
  {path: 'agregar-tarea', component:AgregarTareasComponent},
  {path: 'editar-tarea/:id', component:EditarTareaComponent},
  {path: 'listar-tarea', component:ListarTareasComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
