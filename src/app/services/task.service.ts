import { Injectable } from '@angular/core';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [];
  constructor() { 
    this.tasks = [
      // {title: "Crear Contenido", description: "Escribir contenido para el sitio web"},
      // {title: "Crear Pagina", description: "Crear una pagina web"},
    ];
  }
  getTasks(){
    if(localStorage.getItem('tasks') === null) {
      return this.tasks;
    }else{
      this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      return this.tasks;
  }
  }

  addTask(task: Task) {
    this.tasks.push(task);
    if (localStorage.getItem('tasks') === null) {
      this.tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    } else {
      this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      this.tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }
  deleteTask(task:Task){
    for(let i=0; i < this.tasks.length; i++){
      if(task === this.tasks[i]){
        this.tasks.splice(i, 1);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    }
  }

}
