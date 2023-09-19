import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoComponent } from './todo/todo.component'; // Todo sayfanızın bileşeni

export const routes: Routes = [
  // 'login' yolunu tanımlayın
  { path: 'todo', component: TodoComponent }, // 'todo' yolunu tanımlayın
  // Diğer yolları burada tanımlayabilirsiniz
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


