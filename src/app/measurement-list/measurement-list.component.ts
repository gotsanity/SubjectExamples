import { DataService } from './../data.service';
import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-measurement-list',
  templateUrl: './measurement-list.component.html',
  styleUrls: ['./measurement-list.component.scss']
})
export class MeasurementListComponent implements OnInit {

  measurement: number = NaN;
  subject: Subject<number> = new Subject<number>();

  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.subject = this.dataService.baseSubject;
  }

  onSub() {
    this.dataService.baseSubject.subscribe((data) => {
      this.measurement = data;
    });
  }

}
