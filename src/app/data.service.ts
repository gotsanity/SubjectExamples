import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  replaySubject: ReplaySubject<number> = new ReplaySubject<number>();
  behaviorSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  baseSubject: Subject<number> = new Subject<number>();

  constructor() {
    this.changeValue(0);
  }

  changeValue(value: number): void {
    this.replaySubject.next(value);
    this.behaviorSubject.next(value);
    this.baseSubject.next(value);
  }
}
