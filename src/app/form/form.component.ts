import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor( private fb: FormBuilder,private dataService: DataService) {   }

  studentForm = this.fb.group({
    name :['',Validators.required],
    gender :['',Validators.required],
    rollNo : ['',Validators.required],
    percentage:['',Validators.required],
    rating :['0']
  })

  ngOnInit(): void {

  }

  addItem(newItem: string) {
    this.studentForm.controls['rating'].setValue(newItem);
  }

  onSubmit(sendmsg){
    this.dataService.postStudent(sendmsg);
  }

}
