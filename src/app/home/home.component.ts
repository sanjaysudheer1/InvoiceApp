import { Component, OnInit } from '@angular/core';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { routesConstants } from '../routes_constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  items: MenuItem[] | undefined;
  profileItems: MenuItem[] | undefined; // Profile dropdown items
  constructor(private router: Router) {
    
  }
  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
      },
      {
        label: 'Create Master',
        icon: PrimeIcons.PLUS,
        items: [
          {
              label: 'Item Master',
              icon: PrimeIcons.LIST,
              command: () => this.navigateTo(routesConstants.ITEMS_LIST),
          },
          {
              label: 'User Master',
              icon: PrimeIcons.USER_PLUS,
              command: () => this.navigateTo(routesConstants.USER_LIST),
          }
      ]
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
      },
    ];
    this.profileItems = [
      {
        label: 'View Profile',
        icon: 'pi pi-fw pi-user',
        command: () => this.viewProfile(),
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-sign-out',
        command: () => this.logout(),
      },
    ];
  }
  viewProfile() {
    // Implement view profile logic
    console.log('Viewing profile');
  }

  logout() {
    // Implement logout logic
    console.log('Logging out');
  }

  onNotificationsClick() {
    // Implement the logic to show notifications or open a notifications panel
    console.log('Notifications clicked');
  }

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }
}
