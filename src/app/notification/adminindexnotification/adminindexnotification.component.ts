



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { Notification } from '../notification';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';

@Component({
  selector: 'app-adminindexnotification',
  standalone: true,
  imports: [CommonModule, RouterModule,AdminfooterComponent,AdminheaderComponent,AdminmenuComponent],
  templateUrl: './adminindexnotification.component.html',
  styleUrl: './adminindexnotification.component.css'
})
export class AdminindexnotificationComponent {
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