

import { CompanyfooterComponent } from '../../company/companyfooter/companyfooter.component';
import { CompanyheaderComponent } from '../../company/companyheader/companyheader.component';
import { CompanymenuComponent } from '../../company/companymenu/companymenu.component';









import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AffprojetService } from '../affprojet.service';
import { Affprojet } from '../affprojet';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
@Component({
  selector: 'app-companyindexaffprojet',
  standalone: true,
imports: [CommonModule, RouterModule,CompanyfooterComponent,CompanyheaderComponent,CompanymenuComponent],
  templateUrl: './companyindexaffprojet.component.html',
  styleUrl: './companyindexaffprojet.component.css'
})
export class CompanyindexaffprojetComponent {


  affprojets: Affprojet[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public affprojetService: AffprojetService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.affprojetService.getAll().subscribe((data: Affprojet[])=>{
      this.affprojets = data;
      console.log(this.affprojets);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteAffprojet(id:number){
    this.affprojetService.delete(id).subscribe(res => {
         this.affprojets = this.affprojets.filter(item => item._id !== id);
         console.log('Affprojet deleted successfully!');
    })
  }
}