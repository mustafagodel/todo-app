import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import {routes} from './app-routing.module'
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [

    TodoComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [TodoComponent],
  
})
export class AppModule { }


