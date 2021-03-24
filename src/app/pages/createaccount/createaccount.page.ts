import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.page.html',
  styleUrls: ['./createaccount.page.scss'],
})
export class CreateaccountPage implements OnInit {

  background: any = "assets/imgs/Vector.svg";
  constructor(private router: Router) { }

  ngOnInit() {
  }

  create() {
    this.router.navigateByUrl('tabs/movies');
  }
}
