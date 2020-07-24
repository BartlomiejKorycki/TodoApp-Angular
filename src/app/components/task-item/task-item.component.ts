import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task/task';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { style } from '@angular/animations';

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task;
  @Output() checkedItem = new EventEmitter();
  @Output() doubleClickedItem = new EventEmitter();
  @Output() cancelledItem = new EventEmitter();

  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {}

  openDialog(): void {
    let dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '500px',
      height: '450px',
      data: {
        id: this.task.id, 
        name: this.task.name, 
        description: this.task.description,
        status: this.task.status,
        date: this.task.date,
        priority: this.task.priority,
        completed: this.task.completed,
        editing: this.task.editing,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`)
    })
  }

  doneEdit(task: Task): void {
    this.checkedItem.emit(task);
  }

  editName(task: Task): void {
    this.doubleClickedItem.emit(task);
  }

  cancelEdit(task: Task): void {
    this.cancelledItem.emit(task);
  }

  checkboxChanger(): void {
    if(this.task.inProgress === false && this.task.completed === false) {
      this.task.status = 'w toku';
      this.task.inProgress = true;
    } 
    else if(this.task.inProgress === true && this.task.completed === false) {
      this.task.inProgress = false;
      this.task.status = 'gotowe';
      this.task.completed = true;
    }
    else if (this.task.inProgress === false && this.task.completed === true) {
      this.task.completed = false;
      this.task.status = 'do zrobienia';
    }
  }

  getColor(): string {
    if (this.task.completed) {
      return 'primary';
    } else if (!this.task.completed && this.task.inProgress){
      return 'warn';
    }
  }
}