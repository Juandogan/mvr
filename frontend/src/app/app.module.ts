import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CrudService} from '../app/servicios/crud.service'

//MATERIAL
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CKEditorModule } from 'ckeditor4-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { ArticuloCardComponent } from './componentes/articulo-card/articulo-card.component';
import { PubliCardComponent } from './componentes/publi-card/publi-card.component';
import { VideosCardComponent } from './componentes/videos-card/videos-card.component';
import { InfoCardComponent } from './componentes/info-card/info-card.component';
import { TodosComponent } from './componentes/todos/todos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { MuseoComponent } from './componentes/museo/museo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FiltroPipe } from './pipes/filtro.pipe';
import { Filtrox4Pipe } from './pipes/filtrox4.pipe';
import { ArticuloComponent } from './componentes/articulo/articulo.component';
import { LaterlArticuloComponent } from './componentes/laterl-articulo/laterl-articulo.component';
import { SafePipe } from './pipes/safe.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { ArticuloCardDesktopComponent } from './componentes/articulo-card-desktop/articulo-card-desktop.component';
import { PubliCardMobileComponent } from './componentes/publi-card-mobile/publi-card-mobile.component';
import { MuestraComponent } from './componentes/muestra/muestra.component';
import { InformacionMuseoComponent } from './componentes/informacion-museo/informacion-museo.component';
import { VideosTodosComponent } from './componentes/videos-todos/videos-todos.component';
import { AdmComponent } from './componentes/adm/adm.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import {MatInputModule} from '@angular/material/input';
import { BuscarPipe } from './pipes/buscar.pipe';
import { PublicacionesComponent } from './componentes/publicaciones/publicaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PrincipalComponent,
    ArticuloCardComponent,
    PubliCardComponent,
    VideosCardComponent,
    InfoCardComponent,
    TodosComponent,
    FooterComponent,
    PortadaComponent,
    MuseoComponent,
    FiltroPipe,
    Filtrox4Pipe,
    ArticuloComponent,
    LaterlArticuloComponent,
    SafePipe,
    TruncatePipe,
    ArticuloCardDesktopComponent,
    PubliCardMobileComponent,
    MuestraComponent,
    InformacionMuseoComponent,
    VideosTodosComponent,
    AdmComponent,
    BuscadorComponent,
    BuscarPipe,
    PublicacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatInputModule,
    CKEditorModule,


  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
