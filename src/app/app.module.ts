import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainTitleComponent } from './main-title/main-title.component';
import { TaskInputComponent } from './task-input/task-input.component';
import { TasksContainerComponent } from './tasks-container/tasks-container.component';
import { TaskComponent } from './task/task.component';
import { PrimaryBtnComponent } from './primary-btn/primary-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    MainTitleComponent,
    TaskInputComponent,
    TasksContainerComponent,
    TaskComponent,
    PrimaryBtnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
