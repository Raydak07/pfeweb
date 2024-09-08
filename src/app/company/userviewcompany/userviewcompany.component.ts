

import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';



import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';




import { Component } from '@angular/core';
  
import { CompanyService } from '../company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../company';
  
@Component({
  selector: 'app-userviewcompany',
  standalone: true,
  imports: [],
  templateUrl: './userviewcompany.component.html',
  styleUrl: './userviewcompany.component.css'
})
export class UserviewcompanyComponent {
  
  id!: number;
  company!: Company;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['companyId'];
          
    this.companyService.find(this.id).subscribe((data: Company)=>{
      this.company = data;
    });
  }
  
}