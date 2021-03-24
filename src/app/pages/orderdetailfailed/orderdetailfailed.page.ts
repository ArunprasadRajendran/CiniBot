import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderdetailfailed',
  templateUrl: './orderdetailfailed.page.html',
  styleUrls: ['./orderdetailfailed.page.scss'],
})
export class OrderdetailfailedPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  book() {
    this.router.navigateByUrl('/ordersuccess');
  }

}
