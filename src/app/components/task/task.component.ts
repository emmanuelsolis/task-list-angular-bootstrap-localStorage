import { TaskService } from './../../services/task.service';
import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'ng-container[app-task]',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task!: any;
  constructor(
    public taskService:TaskService
  ) { }
  ngOnInit(){}
  deleteTask(task:Task){
    this.taskService.deleteTask(task);
  }

}