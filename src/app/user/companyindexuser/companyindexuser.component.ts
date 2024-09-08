
import { CompanyfooterComponent } from '../../company/companyfooter/companyfooter.component';
import { CompanyheaderComponent } from '../../company/companyheader/companyheader.component';
import { CompanymenuComponent } from '../../company/companymenu/companymenu.component';




import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';





@Component({
  selector: 'app-companyindexuser',
  standalone: true,
imports: [CommonModule, RouterModule,CompanyfooterComponent,CompanyheaderComponent,CompanymenuComponent],
  templateUrl: './companyindexuser.component.html',
  styleUrl: './companyindexuser.component.css'
})
export class CompanyindexuserComponent {
  users: User[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public userService: UserService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.userService.getAll().subscribe((data: User[])=>{
      this.users = data;
      console.log(this.users);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteUser(id:number){
    this.userService.delete(id).subscribe(res => {
         this.users = this.users.filter(item => item._id !== id);
         console.log('User deleted successfully!');
    })
  }
}