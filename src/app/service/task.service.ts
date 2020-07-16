import { Injectable } from '@angular/core';
import { Task } from '../components/models/task/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  task: Task;
  tasks: Task[] = [
    new Task(1, 'Przebiegnij 10km', '1km / 5:00 min'),
    new Task(2,'Zrób zakupy','pomidory, papryka, indyk, jaja, sos pomidorowy, jogutry, makaron, chleb'),
    new Task(3, 'Powtórz słówka','')
  ];

  taskName: string = '';
  beforeEditCache: string = '';
  taskId: number = 4;
  filter: string = 'todo';
}