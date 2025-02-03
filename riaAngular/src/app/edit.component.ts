import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'name-edit',
  standalone: true,
  imports: [FormsModule, ButtonModule, InputTextModule, PanelModule],
  template: `
    <p-panel header="Editar Nome">
      <div class="p-field">
        <label for="editName">Novo Nome:</label>
        <input id="editName" pInputText [(ngModel)]="editName" placeholder="Digite o novo nome">
      </div>
      <p-footer>
        <p-button label="Salvar" icon="pi pi-check" (onClick)="save()"></p-button>
      </p-footer>
    </p-panel>
  `
})
export class EditComponent {
  @Input() name: string = '';
  @Output() updateName = new EventEmitter<string>();

  editName: string = '';

  ngOnChanges() {
    if (this.name) {
      this.editName = this.name;
    }
  }

  save() {
    this.updateName.emit(this.editName);
  }
}