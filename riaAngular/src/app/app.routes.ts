import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list.component';
import { TaskFormComponent } from './task-form.component';
import { TaskEditComponent } from './task-edit.component';
import { TaskDetailComponent } from './task-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskListComponent },
  { path: 'add', component: TaskFormComponent },
  { path: 'edit/:id', component: TaskEditComponent },
  { path: 'detail/:id', component: TaskDetailComponent },
];