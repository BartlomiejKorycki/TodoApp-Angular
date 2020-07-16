import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task/task';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
  selector: 'completed-task-item',
  templateUrl: './completed-task-item.component.html',
  styleUrls: ['./completed-task-item.component.css']
})
export class CompletedTaskItemComponent implements OnInit {

  @Input() task: Task;
  @Output() checkedItem = new EventEmitter();
  @Output() doubleClickedItem = new EventEmitter();
  @Output() cancelledItem = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    let dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '30%',
      height: '500px',
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

  ngOnInit(): void {
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

  ifCompleted(): void {
    if(this.task.completed == false) {
      this.task.status = 'gotowe';
    } else {
      this.task.status = 'do zrobienia';
    }
  }
}
