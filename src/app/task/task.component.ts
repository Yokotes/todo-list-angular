import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements Task {
  @Input() id = 0;
  @Input() title = '';
  @Input() completed = false;

  @Output() deleteTaskEvent = new EventEmitter<number>();
  @Output() changeCompletedEvent = new EventEmitter<{ id: number, completed: boolean }>()

  changeCompleted(value: boolean) {
    this.completed = value;
    this.changeCompletedEvent.emit({
      id: this.id,
      completed: this.completed
    });
  }

  deleteTask() {
    this.deleteTaskEvent.emit(this.id);
  }
}
