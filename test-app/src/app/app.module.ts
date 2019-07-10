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
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LoginComponent } from './components/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import { AuthService } from './services/auth.service';
import { MatDialogModule } from '@angular/material/dialog';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { DlgSelectUserComponent } from './lista-turnos/dlg-select-user/dlg-select-user.component';
import { SelectUserComponent } from './lista-turnos/select-user/select-user.component'
import {MatRadioModule} from '@angular/material/radio';


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
    SidebarComponent,
    LoginComponent,
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
    MatSidenavModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatRadioModule,

    RouterModule.forRoot([
      { path: '', component: SeleccionTicketsComponent},
      { path: 'vista-turno', component: TurnosComponent},
      { path: 'usuarios-atencion', component: TurnosUsuarioAtencionComponent},
      { path: 'login', component: LoginComponent},
      
      
    ]),

  ],
  entryComponents: [
    DlgSelectUserComponent
  ],
  providers: [
    TipoTurnoBtnService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
