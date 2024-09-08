
import { CompanyfooterComponent } from '../../company/companyfooter/companyfooter.component';
import { CompanyheaderComponent } from '../../company/companyheader/companyheader.component';
import { CompanymenuComponent } from '../../company/companymenu/companymenu.component';




import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Admin } from '../admin';
import { AdminfooterComponent } from '../adminfooter/adminfooter.component';
import { AdminheaderComponent } from '../adminheader/adminheader.component';
import { AdminmenuComponent } from '../adminmenu/adminmenu.component';
@Component({
  selector: 'app-companyindexadmin',
  standalone: true,
imports: [CommonModule, RouterModule,CompanyfooterComponent,CompanyheaderComponent,CompanymenuComponent],
  templateUrl: './companyindexadmin.component.html',
  styleUrl: './companyindexadmin.component.css'
})
export class CompanyindexadminComponent {
  admins: Admin[] = [];
    
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