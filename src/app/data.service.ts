import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http:HttpClient) { }

  getStudents() : Observable<any> {
    return (this._http.get('http://localhost:3000/students'))
  }

  postStudent(student: any){
    return this._http.post('http://localhost:3000/students',student).subscribe((result)=>{ 
    console.warn("result",result);  
    
  });
  }
}
