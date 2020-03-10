import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Tabs',
      url: '/menu/tabs',
      icon: 'home'
    },
    {
      title: 'Ionic',
      url: '/menu/ionic',
      icon: 'logo-ionic'
    },
    {
      title: 'Cat',
      children: [
        {
          title: 'Cat',
          url: '/menu/cat',
          icon: 'logo-octocat'
        },
        {
          title: 'Flutter',
          url: '/menu/flutter',
          icon: 'logo-google'
        },
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
