import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TipoTurnoBtnComponent } from './components/tipo-turno-btn/tipo-turno-btn.component';
import { TipoTurnoBtnService } from './components/tipo-turno-btn/tipo-turno-btn.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    TipoTurnoBtnComponent
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
    FlexLayoutModule
  ],
  providers: [
    TipoTurnoBtnService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
