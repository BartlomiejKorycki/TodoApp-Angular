import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskDialogComponent } from './components/task-dialog/task-dialog.component';
import { TaskService } from './service/task.service';
import { CompletedTaskItemComponent } from './components/completed-task-item/completed-task-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarMenuComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskDialogComponent,
    CompletedTaskItemComponent
  ],
  entryComponents: [TaskDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
