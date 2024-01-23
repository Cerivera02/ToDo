// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-listar-tareas',
//   templateUrl: './listar-tareas.component.html',
//   styleUrl: './listar-tareas.component.css'
// })
// export class ListarTareasComponent {

// }


import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-tareas',
  templateUrl: './listar-tareas.component.html',
  styleUrls: ['./listar-tareas.component.css']
})
export class ListarTareasComponent implements OnInit {
  tareas: any = [];
  cargandoTareas: boolean = false;
  cambiarCargando(nuevoValor: boolean) {
    this.cargandoTareas = nuevoValor;
  }

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.cargarTareas();
  }

  cargarTareas(): void {
    this.cargandoTareas = true;
    this.apiService.getDatos().subscribe(
      (tareas) => {
        this.tareas = tareas;
        this.cargandoTareas = false;
      },
      (error) => {
        console.error('Error al cargar tareas:', error);
        this.cargandoTareas = false; // Asegúrate de manejar los errores adecuadamente
      }
    );
  }

  eliminarTarea(id: number): void {
    if (confirm('¿Estás seguro de que quieres borrar esta tarea?')) {
      this.apiService.deleteDato(id).subscribe(
        () => {
          console.log('Tarea eliminada exitosamente');
          // Puedes recargar la lista de tareas o realizar cualquier acción adicional después de la eliminación
          this.cargarTareas();
        },
        (error) => {
          console.error('Error al eliminar tarea:', error);
        }
      );
    }
  }
}
