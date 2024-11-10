import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  items: MenuItem[] | undefined;
  profileItems: MenuItem[] | undefined; // Profile dropdown items
  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
      },
      {
        label: 'Features',
        icon: 'pi pi-star',
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
}
