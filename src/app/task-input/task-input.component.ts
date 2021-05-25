import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent {

  @Output() addTaskEvent = new EventEmitter<string>();

  addNewTask(title: string | undefined) {
    if (!title) {
      alert("Enter task title!");
    }

    this.addTaskEvent.emit(title);
  }

}
