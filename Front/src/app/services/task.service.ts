import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Observable, of} from 'rxjs';
import {Task} from '../Task'
import {TASKS} from '../mock-tasks'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:3000/agenda'

  constructor(private http:HttpClient) {}

  getTasks(): Observable<any> {
   return this.http.get(this.apiUrl)
  }

  deleteTask(id:any): Observable<any>{
    let ids = id;
    return this.http.delete(`${this.apiUrl}/${ids}`)
  }
  updateTaskReminder(task: Task): Observable<any>{
    return this.http.put(`${this.apiUrl}/${task.id}`, task);
  }

  addTask(task: Task): Observable<any>{
    return this.http.post(this.apiUrl, task);

  }
}
