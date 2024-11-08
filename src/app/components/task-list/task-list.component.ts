// src/app/components/task-list/task-list.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Output() deleteTask = new EventEmitter<string>();
  @Output() editTask = new EventEmitter<Task>();

  editingTask: Task = { id: '', title: '', description: '' };

  onDelete(id: string) {
    this.deleteTask.emit(id);
  }

  onEdit(task: Task) {
    this.editingTask = { ...task };
    // Open modal
    const modal = document.getElementById('editModal');
    if (modal) {
      const bootstrapModal = new (window as any).bootstrap.Modal(modal);
      bootstrapModal.show();
    }
  }
  saveEdit() {
    this.editTask.emit(this.editingTask);
  }
}