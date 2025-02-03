import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
      <h1>Olá, escreva suas tarefas</h1>
  `
})
export class HelloComponent {
  @Input() helloName = ''
}