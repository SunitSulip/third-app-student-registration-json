import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { NotifyService } from '../notify.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  constructor(private notifyService:NotifyService) { }

  ngOnInit(): void {
  }
//transfering the rating value to form component
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
    this.notifyService.sendMessage("Rating Updated and Stored");
  }

}
