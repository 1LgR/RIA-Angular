import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HelloComponent } from './hello.component';
import { InsertComponent } from './insert.component';
import { ListComponent } from './list.component';
import { DetailComponent } from './detail.component';
import { EditComponent } from './edit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, HelloComponent, InsertComponent, ListComponent, DetailComponent, EditComponent], 
  template: `
    <main class="main">
      <div class="content">
        <div class="left-side">
          <app-hello helloName="DEV"></app-hello>

          <name-insert (insertOutEvent)="insert($event)"></name-insert>

          <name-list (removeOutEvent)="remove($event)" [listNames]="names" (selectNameEvent)="selectName($event)"></name-list>

          <name-detail [name]="selectedName"></name-detail>

          <name-edit *ngIf="selectedName" [name]="selectedName" (updateName)="updateName($event)"></name-edit>
        </div>  
      </div>
    </main>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  names: Array<string> = [];
  selectedName: string = '';

  insert(name: string) {
    this.names.push(name);
  }

  remove(item: string) {
    this.names = this.names.filter(internalName => internalName !== item);
  }

  selectName(name: string) {
    this.selectedName = name;
  }

  updateName(updatedName: string) {
    const index = this.names.indexOf(this.selectedName);
    this.names[index] = updatedName;
    this.selectedName = updatedName;
  }
}