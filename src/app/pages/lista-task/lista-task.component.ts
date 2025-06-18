import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../types/task.type';

@Component({
  selector: 'app-lista-task',
  templateUrl: './lista-task.component.html',
  styleUrls: ['./lista-task.component.scss']
})
export class ListaTaskComponent implements OnInit {
  tasks: Task[] = []; // Riferimento all'array dei task

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks(); // Ottiene il riferimento all'array
    console.log('Lista dei task:', this.tasks); // Verifica che la lista venga aggiornata
  }

  eliminaTask(id: number): void {
    this.taskService.eliminaTask(id);
    this.tasks = this.taskService.getTasks(); // Ricarica la lista aggiornata
  }
}
