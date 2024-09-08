

import { CompanyfooterComponent } from '../../company/companyfooter/companyfooter.component';
import { CompanyheaderComponent } from '../../company/companyheader/companyheader.component';
import { CompanymenuComponent } from '../../company/companymenu/companymenu.component';









import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AvtacheService } from '../avtache.service';
import { Avtache } from '../avtache';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
@Component({
  selector: 'app-companyindexavtache',
  standalone: true,
imports: [CommonModule, RouterModule,CompanyfooterComponent,CompanyheaderComponent,CompanymenuComponent],
  templateUrl: './companyindexavtache.component.html',
  styleUrl: './companyindexavtache.component.css'
})
export class CompanyindexavtacheComponent {
  avtaches: Avtache[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public avtacheService: AvtacheService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.avtacheService.getAll().subscribe((data: Avtache[])=>{
      this.avtaches = data;
      console.log(this.avtaches);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteAvtache(id:number){
    this.avtacheService.delete(id).subscribe(res => {
         this.avtaches = this.avtaches.filter(item => item._id !== id);
         console.log('Avtache deleted successfully!');
    })
  }
}

