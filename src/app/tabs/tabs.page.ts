import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  selectTab: any = 'movies';
  listenUrl: any;
  routerParams: any;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.routerParams = this.route.queryParams.subscribe(params => {
      this.listenUrl = this.router.events.subscribe((event: RouterEvent) => {
        if (event && event.url) {
          let url = event.url.split('?')[0];
          if (url == '/tabs/tickets') {
            this.selectTab = 'tickets';
          } else if (url == '/tabs/movies') {
            this.selectTab = 'movies';
          } else if (url == '/tabs/about') {
            this.selectTab = 'about';
          }
        }
      });
    });
  }

  ionViewWillEnter() {

  }

  ionViewWillLeave() {
    this.listenUrl.unsubscribe();
  }
}
