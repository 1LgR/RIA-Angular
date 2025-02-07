import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from './item.model';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule,TableModule, ButtonModule],
  template: `
    <p-table [value]="listTasks" responsiveLayout="scroll">
      <ng-template pTemplate="header">
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-task>
        <tr [ngClass]="{'selected': selectedTask?.id === task.id}">
          <td>{{ task.id }}</td>
          <td>{{ task.name }}</td>
          <td>{{ task.feito ? '✔ Concluído' : '❌ Pendente' }}</td>
          <td>
            <button pButton type="button" label="Editar" icon="pi pi-pencil"
                    class="p-button-warning" (click)="selectTask(task)">
            </button>
            <button pButton type="button" label="Remover" icon="pi pi-trash"
                    class="p-button-danger" (click)="removeTask(task.id, $event)">
            </button>
          </td>
        </tr>
      </ng-template>
    </p-table>
  `,
  styles: [`
    .selected {
      background-color: #ffeeba !important;
    }
  `]
})
export class TaskListComponent {
  @Input() listTasks: Item[] = [];
  @Input() selectedTask: Item | null = null;
  @Output() removeOutEvent = new EventEmitter<number>();
  @Output() selectTaskEvent = new EventEmitter<Item>();

  selectTask(task: Item) {
    this.selectTaskEvent.emit(task);
  }

  removeTask(taskId: number, event: Event) {
    event.stopPropagation();
    this.removeOutEvent.emit(taskId);
  }
}
