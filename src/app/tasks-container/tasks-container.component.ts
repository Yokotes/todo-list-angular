import { AfterContentChecked, Component, Input, OnChanges } from '@angular/core';
import { Task } from '../task/task.component';

@Component({
  selector: 'app-tasks-container',
  templateUrl: './tasks-container.component.html',
  styleUrls: ['./tasks-container.component.scss']
})
export class TasksContainerComponent implements AfterContentChecked{
  @Input() tasks: Task[] = []

  ngAfterContentChecked(): void {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  deleteTask(value: number) {
    this.tasks = this.tasks.filter((task) => task.id !== value);
  }

  changeTaskCompleted(taskState: { id: number, completed: boolean }) {
    const task = this.tasks.filter((task) => task.id === taskState.id)[0];
    task.completed = taskState.completed;
  }
}
