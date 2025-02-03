import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'name-list',
  imports: [ButtonModule, TableModule, PanelModule],
  template: `
    <p-panel header="Lista de Nomes">
      <p-table [value]="listNames">
        <ng-template #header>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </ng-template>

        <ng-template #body let-item>
          <tr>
            <td>{{ item }}</td>
            <td>
              <p-button icon="pi pi-search" (onClick)="selectName(item)" label="Detalhar"></p-button>
              <p-button icon="pi pi-pencil" (onClick)="editName(item)" label="Editar"></p-button>
              <p-button icon="pi pi-trash" (onClick)="remove(item)" label="Remover"></p-button>
            </td>
          </tr>
        </ng-template>
      </p-table>
    </p-panel>
  `
})
export class ListComponent {
  @Input() listNames: Array<string> = [];
  @Output() removeOutEvent = new EventEmitter<string>();
  @Output() selectNameEvent = new EventEmitter<string>();
  @Output() editNameEvent = new EventEmitter<string>();

  remove(item: string) {
    this.removeOutEvent.emit(item);
  }

  selectName(name: string) {
    this.selectNameEvent.emit(name);
  }

  editName(name: string) {
    this.selectNameEvent.emit(name); 
  }
}