




import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CompanyService } from '../company.service';
import { Company } from '../company';

import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';


@Component({
  selector: 'app-adminindexcompany',
  standalone: true,
  imports: [CommonModule, RouterModule,AdminfooterComponent,AdminheaderComponent,AdminmenuComponent],
  templateUrl: './adminindexcompany.component.html',
  styleUrl: './adminindexcompany.component.css'
})
export class AdminindexcompanyComponent {
  companys: Company[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public companyService: CompanyService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.companyService.getAll().subscribe((data: Company[])=>{
      this.companys = data;
      console.log(this.companys);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteCompany(id:number){
    this.companyService.delete(id).subscribe(res => {
         this.companys = this.companys.filter(item => item._id !== id);
         console.log('Company deleted successfully!');
    })
  }
}