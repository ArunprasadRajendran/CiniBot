import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.page.html',
  styleUrls: ['./moviedetails.page.scss'],
})
export class MoviedetailsPage implements OnInit {
  background: any = "assets/imgs/master.png";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  book() {
    this.router.navigateByUrl('/movietimeslot');
  }
}
