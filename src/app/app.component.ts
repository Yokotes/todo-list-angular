import { Component, OnInit } from '@angular/core';
import { Task } from './task/task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  mainTitle = 'Task manager';
  tasks: Task[] = [];

  ngOnInit() {
    const rawTasks = localStorage.getItem("tasks");

    if (rawTasks) {
      this.tasks = JSON.parse(rawTasks);
    }
  }

  addTask(title: string) {
    const task: Task = {
      id: this.tasks.length,
      title,
      completed: false
    }

    this.tasks.unshift(task);

    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}
