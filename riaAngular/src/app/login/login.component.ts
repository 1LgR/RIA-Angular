import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from '../task-form.component';
import { TaskListComponent } from '../task-list.component';
import { TaskDetailComponent } from '../task-detail.component';
import { TaskEditComponent } from '../task-edit.component';
import { Item } from '../item.model';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TaskFormComponent,
    TaskListComponent,
    TaskDetailComponent,
    TaskEditComponent,
    CardModule,
    ButtonModule,
    DividerModule,
    PanelModule
  ], 
  template: `
    <main class="main">
      <div class="content">
        <p-panel header="Gerenciador de Tarefas">
          <div class="layout">
            
            <p-card header="Adicionar Tarefa">
              <app-task-form (insertOutEvent)="insert($event)"></app-task-form>
            </p-card>

            <p-divider></p-divider>

            <p-card header="Lista de Tarefas">
              <app-task-list 
                [listTasks]="tasks" 
                [selectedTask]="selectedTask" 
                (removeOutEvent)="remove($event)" 
                (selectTaskEvent)="selectTask($event)">
              </app-task-list>
            </p-card>

            <p-divider></p-divider>

            <p-card *ngIf="selectedTask" header="Detalhes da Tarefa">
              <app-task-detail [task]="selectedTask"></app-task-detail>
            </p-card>

            <p-divider></p-divider>

            <p-card *ngIf="selectedTask" header="Editar Tarefa">
              <app-task-edit 
                [task]="selectedTask" 
                (updateTask)="updateTask($event)"
                (cancelEditEvent)="cancelEdit()">
              </app-task-edit>
            </p-card>
          </div>
        </p-panel>
      </div>
    </main>
  `,
  styles: [`
    .main {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background-color: #f4f4f4;
      padding: 20px;
    }

    .content {
      width: 80%;
      max-width: 800px;
    }

    .layout {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  `]
})
export class LoginComponent {
  tasks: Item[] = [];
  selectedTask: Item | null = null; 

  get selectedTaskOrDefault(): Item | null {
    return this.selectedTask;
  }

  insert(task: Item) {
    task.id = this.tasks.length + 1; 
    this.tasks.push(task);
  }

  remove(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    if (this.selectedTask?.id === id) {
      this.selectedTask = null;
    }
  }

  selectTask(task: Item) {
    this.selectedTask = { ...task }; 
  }

  updateTask(updatedTask: Item) {
    const index = this.tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
      this.selectedTask = updatedTask;
    }
  }

  cancelEdit() {
    this.selectedTask = null; 
  }
}
