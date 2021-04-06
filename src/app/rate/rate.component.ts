import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { NotifyService } from '../notify.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
// @Output() newItemEvent = new EventEmitter<string>();
export class RateComponent implements OnInit {

  constructor(private notifyService:NotifyService) { }

  ngOnInit(): void {
  }

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
    this.notifyService.sendMessage("Rating Updated and Stored");
  }

}
