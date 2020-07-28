import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task/task';
import { trigger, transition, style, animate } from '@angular/animations';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  animations: [
    trigger('fade', [

      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)'}),
        animate(200, style({ opacity: 1, transform: 'translateY(0px)'}))
      ]),

      transition(':leave', [
        animate(200, style({ opacity: 0, transform: 'translateY(30px)'}))
      ]),

    ])
  ]
})
export class TaskListComponent implements OnInit {
  tasks: Task[] ;
  taskName: string ;
  taskId: number ;
  beforeEditCache: string ;
  filter: string ;

  constructor(private service: TaskService) {}

  ngOnInit(): void {
    this.filter = this.service.filter;
    this.beforeEditCache = this.service.beforeEditCache;
    this.taskId = this.service.taskId;
    this.taskName = this.service.taskName;
    this.tasks = this.service.tasks;
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    console.log(this.tasks);
  }

  addTask(): void {
    if (this.taskName.trim().length == 0) {
      return;
    }
    this.tasks.push(new Task(this.taskId, this.taskName, ''))
    this.taskName = '';
    this.taskId++;
    console.log(this.tasks);
  }

  editName(task: Task): void {
    this.beforeEditCache = task.name;
    task.editing = true;
  }

  doneEdit(task: Task): void {
    if (task.name.trim().length === 0) {
      task.name = this.beforeEditCache;
    }

    task.editing = false;
  }

  cancelEdit(task: Task): void {
    task.name = this.beforeEditCache;
    task.editing = false;
  }

  remaining(): number {
    return this.tasks.filter(task => !task.completed).length;
  }

  atLeastOneCompleted(): boolean {
    return this.tasks.filter(task => task.completed).length > 0;
  }

  clearCompleted(): void {
    this.tasks = this.tasks.filter(task => !task.completed);
  }

  checkAllTasks(): void {
    this.tasks.forEach(task => task.completed = (<HTMLInputElement>event.target).checked)
  }

  tasksFilter(): Task[] {
    if (this.filter === 'all') {
      return this.tasks;
    } else if (this.filter === 'toDo') {
      return this.tasks.filter(task => task.status == 'do zrobienia');
    } else if (this.filter === 'inProgress') {
      return this.tasks.filter(task => task.inProgress === true);
    } else if (this.filter === 'completed') {
      return this.tasks.filter(task => task.completed === true);
    } else if (this.filter === 'important') {
      return this.tasks.filter(task => task.priority == 'heigh')
    }
    return this.tasks;
  }
}