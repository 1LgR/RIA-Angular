import { Component, Input } from '@angular/core';
import { PanelModule } from 'primeng/panel'; 

@Component({
  selector: 'name-detail',
  standalone: true, 
  imports: [PanelModule],
  template: `
    <p-panel header="Detalhes">
      <div>
        <h3>{{ name }}</h3>
        <p>Quantidade de letras: {{ name.length }}</p>
      </div>
    </p-panel>
  `
})
export class DetailComponent {
  @Input() name: string = '';
}
