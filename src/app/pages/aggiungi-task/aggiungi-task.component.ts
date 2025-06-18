import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../types/task.type';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-aggiungi-task',
  templateUrl: './aggiungi-task.component.html',
  styleUrl: './aggiungi-task.component.scss'
})
export class AggiungiTaskComponent {

  tasks: Task[] = []; // Array per contenere i dati

  task = {
    id: 0,
    title: '',
    description: '',
    urgency: 'low',  // Imposta il valore di default
  };

  title: string = '';
  description: string = '';
  urgency: 'medium' | 'low' | 'high' = 'low';

  constructor(private taskService: TaskService, private router: Router) {}


  aggiungiNuovoTask(form: NgForm): void {
    console.log('Submit form:', form);
    console.log('Funzione aggiungiNuovoTask chiamata');  // Verifica se viene chiamata
    if (form.valid) {
      const nuovoTask: Task = {
        id: this.taskService.getNextId(), // Genera un ID casuale
        title: this.task.title,
        description: this.task.description,
        urgency: this.task.urgency,
      };
  
      this.taskService.aggiungiTask(nuovoTask);
  
      // Pulisci il form dopo l'aggiunta
      this.title = '';
      this.description = '';
      this.urgency = 'low';
  
      // Reindirizza alla homepage
      this.router.navigate(['/homepage']);
    }
  }
}
