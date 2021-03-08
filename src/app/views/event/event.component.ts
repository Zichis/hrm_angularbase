import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    events: [
      { title: 'Home Coming', date: '2021-03-08' },
      { title: 'Project Launch', date: '2021-03-09' }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
