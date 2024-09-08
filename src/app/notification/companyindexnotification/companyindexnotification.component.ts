


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { Notification } from '../notification';
import { CompanyfooterComponent } from '../../company/companyfooter/companyfooter.component';
import { CompanyheaderComponent } from '../../company/companyheader/companyheader.component';
import { CompanymenuComponent } from '../../company/companymenu/companymenu.component';

@Component({
  selector: 'app-companyindexnotification',
  standalone: true,
  imports: [CommonModule, RouterModule,CompanyfooterComponent,CompanyheaderComponent,CompanymenuComponent],
  templateUrl: './companyindexnotification.component.html',
  styleUrl: './companyindexnotification.component.css'
})
export class CompanyindexnotificationComponent {
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