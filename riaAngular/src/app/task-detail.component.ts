import { Component, Input } from '@angular/core';
import { Item } from './item.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [NgIf],
  template: `
    <div *ngIf="task" class="detail-container">
      <h3>Detalhes da Tarefa</h3>
      <p><strong>ID:</strong> {{ task.id }}</p>
      <p><strong>Nome:</strong> {{ task.name }}</p>
      <p><strong>Status:</strong> {{ task.feito ? '✔ Concluído' : '❌ Pendente' }}</p>
    </div>
  `,
})
export class TaskDetailComponent {
  @Input() task: Item | null = null; 
}
