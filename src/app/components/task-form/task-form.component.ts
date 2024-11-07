import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  constructor(
    public taskService: TaskService
  ){  }
  ngOnInit(){}

  addTask(newTitle: HTMLInputElement, newDescript: HTMLTextAreaElement){
    console.log("adding..", newTitle.value, newDescript.value)
    this.taskService.addTask({
      title: newTitle.value,
      description: newDescript.value
    });
    console.log(this.taskService.getTasks());
    return false
  }
}
