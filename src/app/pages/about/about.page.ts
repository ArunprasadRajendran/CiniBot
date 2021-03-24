import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  screenList: any = ['assets/imgs/theatre.svg', 'assets/imgs/theatre.jpg', 'assets/imgs/theatre3.jpg', 'assets/imgs/theatre.svg'];
  constructor() { }

  ngOnInit() {
  }

}
