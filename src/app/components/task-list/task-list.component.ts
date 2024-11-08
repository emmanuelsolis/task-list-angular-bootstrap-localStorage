// src/app/components/task-list/task-list.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(private modalService: NgbModal) { }

  onDelete(id: string) {
    this.deleteTask.emit(id);
  }

  onEdit(task: Task, content: any) {
    this.editingTask = { ...task };
    this.modalService.open(content);
  }

  saveEdit(modal: any) {
    this.editTask.emit(this.editingTask);
    modal.close();
  }
}
