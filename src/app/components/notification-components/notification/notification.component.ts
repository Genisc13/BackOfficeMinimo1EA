import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  notifications: any[] = [];
  filteredNotifications: any[] = [];
  searchTerm: string = '';
  constructor(private notificationService: NotificationService, private router: Router) {}
  ngOnInit(): void {
    this.notificationService.getNotifications().subscribe((notifications) => {
      this.notifications = notifications;
    });
  }

  showDetails(notification: any): void {
    this.router.navigate(['/notification-details', notification.id]);
  }
  showEdit(notification: any): void {
    this.router.navigate(['/notification-edit', notification.id]);
  }

  search() {
    if (this.searchTerm.trim() !== '') {
      this.filteredNotifications = this.notifications.filter((notification) =>
      notification.nameNotification.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredNotifications = this.notifications;
    }
  }
}
