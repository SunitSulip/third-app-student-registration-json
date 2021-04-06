import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NotifyService } from '../notify.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() public parentData ;
  constructor(private notifyService: NotifyService,private dataService:DataService) { }

  ngOnInit(): void {
  }

  onEdit(name: string,rollNo: number,gender:string,rating: number){
    this.notifyService.sendMessage(name+" selected for editing");
    this.notifyService.sendDetails(name,rollNo,gender,rating);
  
  }

}
