// src/app/components/task-form/task-form.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  @Output() addTask = new EventEmitter<Task>();
  title: string = '';
  description: string = '';

  onSubmit() {
    if (this.title.trim() && this.description.trim()) {
      const newTask: Task = {
        id: Date.now().toString(),
        title: this.title,
        description: this.description
      };
      this.addTask.emit(newTask);
      this.title = '';
      this.description = '';
    }
  }
}