import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  private message = new Subject();
  message$ = this.message.asObservable();

  private name = new BehaviorSubject("");
  name$ = this.name.asObservable();
  private gender = new BehaviorSubject("");
  gender$ = this.gender.asObservable();
  private rollNo = new BehaviorSubject("");
  rollNo$ = this.rollNo.asObservable();
  private rating = new BehaviorSubject(0);
  rating$ = this.rating.asObservable();

  constructor() { }

  sendMessage(information: any){
    this.message.next(information);

  }
  sendDetails(name: string,rollNo: any,gender:string,rating: number){
    this.name.next(name);
    this.rollNo.next(rollNo);
    this.gender.next(gender);
    this.rating.next(rating);

  }
}
