import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordersuccess',
  templateUrl: './ordersuccess.page.html',
  styleUrls: ['./ordersuccess.page.scss'],
})
export class OrdersuccessPage implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  myTickets() {
    this.router.navigateByUrl('/tabs/tickets');
  }

}
