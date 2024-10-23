import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-empleado',
  templateUrl: './lista-empleado.component.html',
  styleUrls: ['./lista-empleado.component.css']
})
export class ListaEmpleadoComponent implements OnInit{
  empleados:Empleado[];

  constructor(private empleadoServicio:EmpleadoService, private router:Router){}

  ngOnInit(): void{
    this.obtenerEmpleados();
  }
  actualizarEmpleado(id:number){
    this.router.navigate(['actualizar-empleado', id]);
  }
  eliminarEmpleado(id:number){
    this.empleadoServicio.eliminarEmpleado(id).subscribe(dato => {
      console.log(dato);
      this.obtenerEmpleados();
    });
  }
  private obtenerEmpleados(){
    this.empleadoServicio.obtenerListaEmpleados().subscribe(dato =>{
      this.empleados=dato;
    });
  }
  verDetallesEmpleado(id:number){
    this.router.navigate(['empleado-detalles', id]);
  }

}
