import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {

  background: any = "assets/imgs/Vector.svg";
  @ViewChild('ngOtpInput', { static: false }) ngOtpInput: any;
  config = {
    allowNumbersOnly: true,
    length: 4,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      'width': '40px',
      'height': '40px',
      'background': '#1c2541',
      'border': 'none',
      'text-align': 'center',
      'color': '#2ac2e5'
    }
  };
  constructor(private router: Router) { }

  ngOnInit() {
  }

  verify() {
    this.router.navigateByUrl('/createaccount');
  }


}
