// src/app/app.component.ts
import { Component } from '@angular/core';
import { Task } from './models/task.model';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  onAddTask(task: Task) {
    this.taskService.addTask(task);
    this.tasks = this.taskService.getTasks();
  }

  onDeleteTask(id: string) {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks();
  }

  onEditTask(task: Task) {
    this.taskService.updateTask(task);
    this.tasks = this.taskService.getTasks();
  }
}