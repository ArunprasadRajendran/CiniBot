import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-orderdetailsuccess',
  templateUrl: './orderdetailsuccess.page.html',
  styleUrls: ['./orderdetailsuccess.page.scss'],
})
export class OrderdetailsuccessPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goback() {
    this.navCtrl.back();
  }

}
