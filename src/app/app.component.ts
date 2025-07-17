import { Component } from '@angular/core';
import { Task } from './types/task.type';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gestione-tasks';  

  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }
  
}
