import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-list',
  templateUrl: './replay-list.component.html',
  styleUrls: ['./replay-list.component.scss']
})
export class ReplayListComponent implements OnInit {

  items: number[] = [];
  subject: ReplaySubject<number> = new ReplaySubject<number>();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.subject = this.dataService.replaySubject;
  }

  onSub() {
    this.dataService.replaySubject.subscribe(data => {
      console.log(data);
      this.items.push(data);
    });
  }

}
