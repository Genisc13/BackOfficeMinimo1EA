import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notification-details',
  templateUrl: './notification-details.component.html',
  styleUrls: ['./notification-details.component.css']
})
export class NotificationDetailsComponent {
  avisoData: any;
  notificationId!: string;
  isModalOpen:boolean=false;
  
  constructor(private route: ActivatedRoute, private notificationService: NotificationService,private router:Router) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData(): void {
    const url = this.route.snapshot.url.join('/');
    const parts = url.split('/');
    this.notificationId = parts[parts.length - 1];
    console.log(this.notificationId);
    this.notificationService.getNotification(this.notificationId).subscribe(avisoData=>{
      this.avisoData=avisoData;
    });
  }
}
