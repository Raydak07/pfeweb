

import { CompanyfooterComponent } from '../../company/companyfooter/companyfooter.component';
import { CompanyheaderComponent } from '../../company/companyheader/companyheader.component';
import { CompanymenuComponent } from '../../company/companymenu/companymenu.component';







import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CompanyService } from '../company.service';
import { Company } from '../company';

import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';


@Component({
  selector: 'app-companyindexcompany',
  standalone: true,
imports: [CommonModule, RouterModule,CompanyfooterComponent,CompanyheaderComponent,CompanymenuComponent],
  templateUrl: './companyindexcompany.component.html',
  styleUrl: './companyindexcompany.component.css'
})
export class CompanyindexcompanyComponent {
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

