import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadoComponent } from './lista-empleado/lista-empleado.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { EmpleadoDetallesComponent } from './empleado-detalles/empleado-detalles.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';

const routes: Routes = [
  {path : 'empleados', component:ListaEmpleadoComponent},
  {path:'',redirectTo:'empleados',pathMatch:'full'},
  {path: 'registrar-empleado', component: RegistrarEmpleadoComponent },
  {path: 'actualizar-empleado/:id', component: ActualizarEmpleadoComponent},
  {path: 'empleado-detalles/:id',component: EmpleadoDetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
