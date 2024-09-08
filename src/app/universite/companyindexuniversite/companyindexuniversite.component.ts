

import { CompanyfooterComponent } from '../../company/companyfooter/companyfooter.component';
import { CompanyheaderComponent } from '../../company/companyheader/companyheader.component';
import { CompanymenuComponent } from '../../company/companymenu/companymenu.component';




import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { UniversiteService } from '../universite.service';
import { Universite } from '../universite';
@Component({
  selector: 'app-companyindexuniversite',
  standalone: true,
imports: [CommonModule, RouterModule,CompanyfooterComponent,CompanyheaderComponent,CompanymenuComponent],
  templateUrl: './companyindexuniversite.component.html',
  styleUrl: './companyindexuniversite.component.css'
})
export class CompanyindexuniversiteComponent {
  universites: Universite[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public universiteService: UniversiteService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.universiteService.getAll().subscribe((data: Universite[])=>{
      this.universites = data;
      console.log(this.universites);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteUniversite(id:number){
    this.universiteService.delete(id).subscribe(res => {
         this.universites = this.universites.filter(item => item._id !== id);
         console.log('Universite deleted successfully!');
    })
  }
}

