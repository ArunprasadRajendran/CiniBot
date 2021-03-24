import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.page.html',
  styleUrls: ['./seat.page.scss'],
})
export class SeatPage implements OnInit {

  timeSlot: any = [
    { time: '10:00 AM', isSelect: false },
    { time: '11:00 AM', isSelect: true },
    { time: '12:00 AM', isSelect: false },
    { time: '02:00 PM', isSelect: false },
    { time: '07:00 PM', isSelect: false }
  ]
  seatCount: any = 2;

  rows: any = [
    { seats: [] },
    { seats: [] },
    { seats: [] },
    { seats: [] },
    { seats: [] },
    { seats: [] },
    { seats: [] },
    { seats: [] },
    { seats: [] },
    { seats: [] },
    { seats: [] },
    { seats: [] },
  ]

  constructor(private router: Router) {
    for (let i in this.rows) {
      this.rows[i].seats.length = 14;
    }
  }

  ngOnInit() {
  }

  pay() {
    this.router.navigateByUrl('/orderconfirmation');
  }

  selectTime(index: any) {
    for (let i = 0; i < this.timeSlot.length; i++) {
      if (index == i) {
        this.timeSlot[i].isSelect = true;
      } else {
        this.timeSlot[i].isSelect = false;
      }
    }
  }

  add() {
    if (this.seatCount < 10)
      this.seatCount++;
  }

  minus() {
    if (this.seatCount > 1)
      this.seatCount--;
  }


  selectSeat(i, j) {
    
    this.rows[i].seats[j] = true;
  }

}
