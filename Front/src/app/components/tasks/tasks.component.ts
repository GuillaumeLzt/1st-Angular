import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service'
import {Task} from '../../Task'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  readData: any;
  successMsg: any;

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((res)=>{
      this.readData = res.data
    });
  }

  deleteTask(id:any){
    this.taskService
      .deleteTask(id)
      .subscribe(
         (res)=>{
            this.taskService.getTasks().subscribe((res)=>{
            this.readData = res.data
            });
        });           
}

  toggleReminder(task:Task){
    task.reminder = !task.reminder;
    console.log(task.reminder)
    this.taskService.updateTaskReminder(task).subscribe()
  }

  addTask(task: Task) {
    this.taskService
      .addTask(task)
      .subscribe((task)=>{(this.tasks.push(task));
        this.taskService.getTasks().subscribe((res)=>{
        this.readData = res.data
        });
      });  
  }
}
