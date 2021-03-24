import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderconfirmation',
  templateUrl: './orderconfirmation.page.html',
  styleUrls: ['./orderconfirmation.page.scss'],
})
export class OrderconfirmationPage implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  pay() {
    this.router.navigateByUrl('/ordersuccess');
  }

}
