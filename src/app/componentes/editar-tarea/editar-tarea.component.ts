import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../servicios/api.service';

@Component({
  selector: 'app-editar-tarea',
  templateUrl: './editar-tarea.component.html',
  styleUrls: ['./editar-tarea.component.css']
})
export class EditarTareaComponent implements OnInit {
  tarea: any = { id: 0, materia: '', descripcion: '' };  // Asegúrate de tener la estructura adecuada para tu tarea
  materias: any = {id: 0, materia: ''};

  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    const tareaId = this.route.snapshot.params['id'];
    // Llama al servicio para obtener los detalles de la tarea con el ID proporcionado
    this.cargarMaterias();

    this.apiService.getDato(tareaId).subscribe(
      (tarea) => {
        this.tarea = tarea;
      },
      (error) => {
        console.error('Error al obtener detalles de la tarea:', error);
      }
    );
  }

  cargarMaterias(): void {
    this.apiService.getMaterias().subscribe(
      (materias) => {
        this.materias = materias;
      },
      (error) => {
        console.error('Error al obtener las materias:', error);
      }
    );
  }
  guardarTarea(): void {
    // Llama al servicio para actualizar la tarea
    this.apiService.updateTarea(this.tarea.id, this.tarea).subscribe(
      () => {
        console.log('Tarea actualizada exitosamente');
        // Redirecciona a la lista de tareas después de la actualización
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Error al actualizar tarea:', error);
      }
    );
  }
}
