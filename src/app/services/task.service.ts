import { Injectable } from '@angular/core';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[];

  constructor() { 
    this.tasks = [
      {title: "Crear Contenido", description: "Escribir contenido para el sitio web"},
      {title: "Crear Pagina", description: "Crear una pagina web"},
    ];
  }
  getTasks(){
    return this.tasks;
  }
  addTask(task: Task){
    this.tasks.push(task);
  }

}
