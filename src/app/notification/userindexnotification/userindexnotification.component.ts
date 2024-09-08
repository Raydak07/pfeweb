


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { Notification } from '../notification';
import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';

@Component({
  selector: 'app-userindexnotification',
  standalone: true,
  imports: [CommonModule, RouterModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './userindexnotification.component.html',
  styleUrl: './userindexnotification.component.css'
})
export class UserindexnotificationComponent {
  notifications: Notification[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public notificationService: NotificationService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.notificationService.getAll().subscribe((data: Notification[])=>{
      this.notifications = data;
      console.log(this.notifications);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteNotification(id:number){
    this.notificationService.delete(id).subscribe(res => {
         this.notifications = this.notifications.filter(item => item._id !== id);
         console.log('Notification deleted successfully!');
    })
  }
}