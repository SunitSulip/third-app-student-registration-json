import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Student } from '../student.model';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  student: Student[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  
    this.dataService.getStudents()
    .subscribe(
      data => {
        this.student = data;
      }
    )

  }

}
