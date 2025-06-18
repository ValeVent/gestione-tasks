import { Injectable } from '@angular/core';
import { Task } from '../types/task.type';
import tasksData from '../assets/tasks.json';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = []; // Inizializziamo i task come array vuoto

  constructor() { }

  // Metodo per ottenere i task, carica i dati dal JSON se l'array è vuoto
  getTasks(): Task[] {
    if (this.tasks.length === 0) {
      this.tasks = tasksData; // Carica i dati dal JSON
      console.log('Dati caricati dal JSON:', this.tasks); // Verifica che i dati siano corretti
    }
    return this.tasks;
  }
  

  // Metodo per ottenere un task per ID
  getTaskById(id: number): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }

  // Metodo per aggiungere un nuovo task
  aggiungiTask(task: Task): void {
    this.tasks = [...this.tasks, task]; // Crea una nuova copia dell'array con il nuovo task
    console.log('Lista aggiornata:', this.tasks); // Verifica che la lista sia aggiornata
  }

  // Metodo per ottenere il prossimo ID
  getNextId(): number {
      return this.tasks.length > 0 ? Math.max(...this.tasks.map(task => task.id)) + 1 : 1;
  }

  // Metodo per eliminare una voce dalla lista
  eliminaTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
  
}
