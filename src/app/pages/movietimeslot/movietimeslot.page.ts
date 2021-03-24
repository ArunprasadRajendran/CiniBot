import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movietimeslot',
  templateUrl: './movietimeslot.page.html',
  styleUrls: ['./movietimeslot.page.scss'],
})
export class MovietimeslotPage implements OnInit {

  seatCountList: any = [{ count: 1, isSelect: false },
  { count: 2, isSelect: true },
  { count: 3, isSelect: false },
  { count: 4, isSelect: false },
  { count: 5, isSelect: false },
  { count: 6, isSelect: false },
  { count: 7, isSelect: false },
  { count: 8, isSelect: false },
  { count: 9, isSelect: false },
  { count: 10, isSelect: false }
  ];

  dateSlot: any = [
    { date: '15/02', day: 'Mon', isSelect: false },
    { date: '16/02', day: 'Tue', isSelect: true },
    { date: '17/02', day: 'Wed', isSelect: false },
    { date: '18/02', day: 'Thu', isSelect: false },
    { date: '19/02', day: 'Fri', isSelect: false },
    { date: '20/02', day: 'Sat', isSelect: false },
    { date: '21/02', day: 'Sun', isSelect: false }
  ];

  timeSlot: any = [
    { time: '10:00 AM', isSelect: false },
    { time: '11:00 AM', isSelect: true },
    { time: '12:00 AM', isSelect: false },
    { time: '02:00 PM', isSelect: false },
    { time: '07:00 PM', isSelect: false }
  ]
  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  seatPage() {
    this.router.navigateByUrl('/seat');
  }

  seatCount(number: any) {
    for (let i = 0; i < this.seatCountList.length; i++) {
      if (number == this.seatCountList[i].count) {
        this.seatCountList[i].isSelect = true;
      } else {
        this.seatCountList[i].isSelect = false;
      }
    }
  }


  selectDate(number: any) {
    for (let i = 0; i < this.dateSlot.length; i++) {
      if (number == i) {
        this.dateSlot[i].isSelect = true;
      } else {
        this.dateSlot[i].isSelect = false;
      }
    }
  }

}
