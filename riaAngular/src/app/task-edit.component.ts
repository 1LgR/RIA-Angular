import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from './item.model';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [FormsModule, ButtonModule, InputTextModule, CheckboxModule],
  template: `
    <div class="task-edit">
        <label>Nome: </label>
        <input type="text" pInputText [(ngModel)]="editableTask.name">
        
        <label><br>Status: </label>
        <p-checkbox label="Feito" [(ngModel)]="editableTask.feito" [binary]="true"></p-checkbox>

        <button pButton type="button" label="Salvar" class="p-button-success" (click)="saveTask()"></button>
        <button pButton type="button" label="Cancelar" class="p-button-secondary" (click)="cancelEdit()"></button>
    </div>
  `,
  styles: [`
    .task-edit {
        background-color: #f4f7f6;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        max-width: 400px;
        margin: 20px auto;
        }

    .task-edit input, .task-edit button {
        margin-bottom: 10px;
        }

    .task-edit label {
        font-weight: bold;
        color: #333;
        }

    .task-edit button {
        width: 100%;
        margin-top: 10px;
        }
  `]
})
export class TaskEditComponent {
  @Input() set task(value: Item) {
    this.editableTask = { ...value };
  }
  @Output() updateTask = new EventEmitter<Item>();
  @Output() cancelEditEvent = new EventEmitter<void>();

  editableTask: Item = { id: 0, name: '', feito: false };

  saveTask() {
    this.updateTask.emit(this.editableTask);
  }

  cancelEdit() {
    this.cancelEditEvent.emit();
  }
}
