import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { NotifyService } from '../notify.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  constructor( private fb: FormBuilder,private dataService: DataService,private notifyService: NotifyService) {   }
  student: Student[];
  studentForm = this.fb.group({
    name :['',Validators.required],
    gender :['',Validators.required],
    rollNo : ['',Validators.required],
    percentage:['',Validators.required],
    rating :['0']
  })
  name: any = "hello";
  rollNo: any;
  gender:any;
  rating: any;
  ngOnInit(): void {
   
    this.notifyService.name$
    .subscribe(name =>this.studentForm.controls['name'].setValue(this.name=name))
    this.notifyService.rollNo$
    .subscribe(rollNo =>this.studentForm.controls['rollNo'].setValue(this.rollNo=rollNo))
    this.notifyService.gender$
    .subscribe(gender =>this.studentForm.controls['gender'].setValue(this.gender=gender))
    this.notifyService.rating$
    .subscribe(rating =>this.studentForm.controls['rating'].setValue(this.rating=rating))

    this.addValues();

  }
  addValues(){
    this.studentForm.controls['name'].setValue(this.name);
  }

  addItem(newItem: string) {
    this.studentForm.controls['rating'].setValue(newItem);
    this.rating=0;
  }

  onSubmit(sendmsg){
    this.dataService.postStudent(sendmsg);
    this.notifyService.sendMessage(" form submitted");
    this.studentForm.reset();
  }

}
