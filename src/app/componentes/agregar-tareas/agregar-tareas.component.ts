// import { Component } from '@angular/core';
// import { ApiService } from '../../servicios/api.service'; 
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-agregar-tareas',
//   templateUrl: './agregar-tareas.component.html',
//   styleUrl: './agregar-tareas.component.css'
// })
// export class AgregarTareasComponent {

//   materias: any = {id: 0, materia: ''};
//   tarea: any = { materia: '', descripcion: '' };

//   constructor(private apiService: ApiService, private router: Router) {}

//   ngOnInit(): void {
//     this.cargarMaterias();
//   }

//   cargarMaterias(): void {
//     this.apiService.getMaterias().subscribe(
//       (materias) => {
//         this.materias = materias;
//       },
//       (error) => {
//         console.error('Error al obtener las materias:', error);
//       }
//     );
//   }

//   crearTarea(): void {
//     this.apiService.createDato(this.tarea).subscribe(
//       () => {
//         console.log('Tarea creada exitosamente');
//         this.router.navigate(['/']);
//       },
//       (error) => {
//         console.error('Error al crear tarea:', error);
//       }
//     )
//   }
// }


import { Component } from '@angular/core';
import { ApiService } from '../../servicios/api.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-tareas',
  templateUrl: './agregar-tareas.component.html',
  styleUrl: './agregar-tareas.component.css'
})
export class AgregarTareasComponent {

  materias: any = {id: null, materia: ''};
  tarea: any = { materia: '', descripcion: '' };

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.cargarMaterias();
  }

  cargarMaterias(): void {
    this.apiService.getMaterias().subscribe(
      (materias) => {
        this.materias = materias;
        this.tarea.materia_id = 'Elige una Materia';
        //this.tarea.materia_id = this.materias[0].id;
      },
      (error) => {
        console.error('Error al obtener las materias:', error);
      }
    );
  }

  crearTarea(): void {
    this.apiService.createDato(this.tarea).subscribe(
      () => {
        console.log('Tarea creada exitosamente');
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Error al crear tarea:', error);
      }
    )
  }
}
