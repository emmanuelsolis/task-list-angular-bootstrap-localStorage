import { TaskService } from './../../services/task.service';
import { Component } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks: Task[] = [];
  constructor(
    public TaskService: TaskService
  ){  }
  ngOnInit() {
    this.tasks = this.TaskService.getTasks();
  }
  deleteTask(task:Task){
    if(confirm('Estas seguro que quieres eliminar esta tarea?')){
      this.TaskService.deleteTask(task);
    }

  }

}
