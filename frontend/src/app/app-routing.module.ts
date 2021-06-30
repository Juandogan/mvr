import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from '../app/componentes/principal/principal.component'
import { ArticuloComponent } from '../app/componentes/articulo/articulo.component'
import { TodosComponent } from '../app/componentes/todos/todos.component'
import { MuestraComponent } from '../app/componentes/muestra/muestra.component'
import { MuseoComponent} from '../app/componentes/museo/museo.component'
import { VideosTodosComponent} from '../app/componentes/videos-todos/videos-todos.component'
import { AdmComponent} from '../app/componentes/adm/adm.component'

const routes: Routes = [

  {path:'', component: PrincipalComponent, pathMatch:"full"},
  {path:'inicio', component: PrincipalComponent},
  {path:'museo', component: MuseoComponent },
  {path:'articulos/:_id', component: ArticuloComponent },
  {path:'todos/:categoria', component: TodosComponent },
  {path:'todos/:categoria', component: VideosTodosComponent },
  {path:'muestra', component: MuestraComponent },
  {path:'adm', component: AdmComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
