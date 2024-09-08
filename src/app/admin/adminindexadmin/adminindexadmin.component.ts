

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Admin } from '../admin';
import { AdminfooterComponent } from '../adminfooter/adminfooter.component';
import { AdminheaderComponent } from '../adminheader/adminheader.component';
import { AdminmenuComponent } from '../adminmenu/adminmenu.component';

@Component({
  selector: 'app-adminindexadmin',
  standalone: true,
  imports: [CommonModule, RouterModule,AdminfooterComponent,AdminheaderComponent,AdminmenuComponent],
  templateUrl: './adminindexadmin.component.html',
  styleUrl: './adminindexadmin.component.css'
})
export class AdminindexadminComponent {
  admins: Admin[] = [];


totalItems = 100;
pageSize = 10;
currentPage = 0;




  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public adminService: AdminService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.adminService.getAll().subscribe((data: Admin[])=>{
      this.admins = data;
      console.log(this.admins);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteAdmin(id:number){
    this.adminService.delete(id).subscribe(res => {
         this.admins = this.admins.filter(item => item._id !== id);
         console.log('Admin deleted successfully!');
    })
  }
}