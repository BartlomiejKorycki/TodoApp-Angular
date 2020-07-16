import { Component, OnInit, Inject, Output, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskService } from 'src/app/service/task.service';
import { Task } from '../models/task/task';

@Component({
  selector: 'task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css']
})
export class TaskDialogComponent implements OnInit {
  
  constructor(
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: TaskService
  ) {}

  status = this.data.status;
  date = this.data.date;

  ngOnInit(): void {
  }

  stats: String[] = ['do zrobienia', 'w toku', 'gotowe'];
  selected: string = 'do zrobienia';
  selectedTask: Task;

  changePriority(val: string): void {
    this.service.tasks.filter(task => task.id == this.data.id ? task.priority = val : console.log('Priority error'));
    console.log('Priority changed on: ' + val);
  }

  statusChanger(val: string): void {
    this.service.tasks.filter(task => {
      if (task.id == this.data.id) {
        task.status = val;
        if (val == 'gotowe') {
          task.completed = true;
        } else {
          task.completed = false;
        }
      }
    })
    console.log('Status changed on: ' + val);
  }

  changeDate(event: any): void {
    this.service.tasks.forEach(element => { 
      element.id === this.data.id ? element.date = event.value : console.log('Date error')
    });
    // this.service.tasks.filter(task => task.id === this.data.id ? task.date = event.value : console.log('Date error'));
    console.log(event.value);
  }

  clearDate(): void {
    let emptyDate: Date;
    this.service.tasks.filter(task => task.id == this.data.id ? task.date = emptyDate : console.log('Clear error'));
    console.log('Date cleared');
  }

  changeNote(event: any): void {
    this.service.tasks.filter(task => task.id == this.data.id ? task.description = event.target.value : console.log('Date error'));
    console.log(event.target.value);
  }

  ok(): void {
    console.log(this.data)
    this.dialogRef.close('ok');
  }
}