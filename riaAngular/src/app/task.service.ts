import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks = new BehaviorSubject<Item[]>([
    { id: 1, name: 'Tarefa exemplo', feito: false }
  ]);

  getTasks() {
    return this.tasks.asObservable();
  }

  getTask(id: number) {
    return this.getTasks().pipe(
      map(tasks => tasks.find(task => task.id === id))
    );
  }

  addTask(task: Item) {
    const currentTasks = this.tasks.value;
    this.tasks.next([...currentTasks, task]);
  }

  updateTask(updatedTask: Item) {
    const tasks = this.tasks.value.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    );
    this.tasks.next(tasks);
  }

  deleteTask(id: number) {
    const filteredTasks = this.tasks.value.filter(task => task.id !== id);
    this.tasks.next(filteredTasks);
  }
}