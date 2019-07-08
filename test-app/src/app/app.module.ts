import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TipoTurnoBtnComponent } from './components/tipo-turno-btn/tipo-turno-btn.component';
import { TipoTurnoBtnService } from './components/tipo-turno-btn/tipo-turno-btn.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ListaTicketsComponent } from './control-tickets/lista-tickets/lista-tickets.component';
import { OpcionUsuarioComponent } from './components/opcion-usuario/opcion-usuario.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { BtnContainerComponent } from './components/btn-container/btn-container.component';
import { RouterModule } from '@angular/router';
import { SeleccionTicketsComponent } from './components/seleccion-tickets/seleccion-tickets.component';
import { Turno } from './models/Turno';
import { TurnosComponent } from './lista-turnos/turnos/turnos.component';
import { ListaTurnosModule } from './lista-turnos/lista-turnos.module';
import { TurnosUsuarioAtencionComponent } from './lista-turnos/turnos-usuario-atencion/turnos-usuario-atencion.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DlgSelectUserComponent } from './lista-turnos/dlg-select-user/dlg-select-user.component';
import { SelectUserComponent } from './lista-turnos/select-user/select-user.component'



@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    TipoTurnoBtnComponent,
    ListaTicketsComponent,
    TituloComponent,
    BtnContainerComponent,
    SeleccionTicketsComponent,
    FooterComponent,
    DlgSelectUserComponent,
    SelectUserComponent,
    
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule, 
    FormsModule,
    FlexLayoutModule,
    MatListModule,
    ListaTurnosModule,
    MatDialogModule,

    RouterModule.forRoot([
      { path: '', component: SeleccionTicketsComponent},
      { path: 'vista-turno', component: TurnosComponent},
      { path: 'usuarios-atencion', component: TurnosUsuarioAtencionComponent},
      
      
    ]),

  ],
  entryComponents: [
    DlgSelectUserComponent
  ],
  providers: [
    TipoTurnoBtnService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
