import { Component, OnInit } from '@angular/core';
import { NotifyService } from '../notify.service';

@Component({
  selector: 'app-notificaton',
  templateUrl: './notificaton.component.html',
  styleUrls: ['./notificaton.component.css']
})
export class NotificatonComponent implements OnInit {
    constructor(private notifyService: NotifyService) { }

    displayMessage: any = "Hey there"


  ngOnInit(): void {
    this.notifyService.message$
    .subscribe(message =>(this.displayMessage=message))
  }

}
