import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  background: any = "assets/imgs/Vector.svg";
  constructor(private router: Router) { }

  ngOnInit() {
  }

  otp() {
    this.router.navigateByUrl('/otp');
  }
}
