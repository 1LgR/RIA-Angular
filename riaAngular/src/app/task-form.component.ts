import { Component, Output, EventEmitter } from '@angular/core';
import { Item } from './item.model';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule, ButtonModule, InputTextModule],
  template: `
    <form (ngSubmit)="addTask()">
      <input type="text" pInputText [(ngModel)]="taskName" name="taskName" placeholder="Digite a tarefa" />
      <button pButton type="submit">Adicionar</button>
    </form>
  `
})
export class TaskFormComponent {
  @Output() insertOutEvent = new EventEmitter<Item>();

  taskName: string = '';

  addTask() {
    if (this.taskName.trim()) {
      const newTask: Item = {
        id: Date.now(), 
        name: this.taskName,
        feito: false
      };
      this.insertOutEvent.emit(newTask);
      this.taskName = ''; 
    }
  }
}
