import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-list',
  templateUrl: './behavior-list.component.html',
  styleUrls: ['./behavior-list.component.scss']
})
export class BehaviorListComponent implements OnInit {

  subject: BehaviorSubject<number> = new BehaviorSubject<number>(-1);
  items: number[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.subject = this.dataService.behaviorSubject;
  }

  onSub() {
    this.dataService.behaviorSubject.subscribe(data => {
      this.items.push(data);
    });
  }

}
