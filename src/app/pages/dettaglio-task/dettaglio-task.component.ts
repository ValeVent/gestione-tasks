import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../types/task.type';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dettaglio-task',
  templateUrl: './dettaglio-task.component.html',
  styleUrl: './dettaglio-task.component.scss'
})
export class DettaglioTaskComponent implements OnInit {


  task: Task | undefined; // Per contenere il task selezionato

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); // Ottieni l'ID dal parametro del router
    if (id) {
      this.task = this.taskService.getTaskById(id);
      console.log('Task recuperato:', this.task); // Verifica nel log se il task viene trovato
    }
  }
}

