import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from './item.model';

@Component({
  selector: 'app-task-delete',
  templateUrl: `
  <div class="delete-modal">
    <p>Tem certeza que deseja excluir a tarefa "{{ task?.name }}"?</p>
    <button (click)="onConfirm()">Sim, Excluir</button>
    <button (click)="onCancel()">Cancelar</button>
  </div>
  `
})
export class TaskDeleteComponent {
  @Input() task: Item | null = null; 
  @Output() confirmDelete = new EventEmitter<number>(); 
  @Output() cancelDelete = new EventEmitter<void>();

  onConfirm() {
    if (this.task) {
      this.confirmDelete.emit(this.task.id);
    }
  }

  onCancel() {
    this.cancelDelete.emit();
  }
}
