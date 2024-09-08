

import { CompanyfooterComponent } from '../../company/companyfooter/companyfooter.component';
import { CompanyheaderComponent } from '../../company/companyheader/companyheader.component';
import { CompanymenuComponent } from '../../company/companymenu/companymenu.component';


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { GroupeService } from '../groupe.service';
import { Groupe } from '../groupe';
@Component({
  selector: 'app-companyindexgroupe',
  standalone: true,
imports: [CommonModule, RouterModule,CompanyfooterComponent,CompanyheaderComponent,CompanymenuComponent],
  templateUrl: './companyindexgroupe.component.html',
  styleUrl: './companyindexgroupe.component.css'
})
export class CompanyindexgroupeComponent {
  groupes: Groupe[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public groupeService: GroupeService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.groupeService.getAll().subscribe((data: Groupe[])=>{
      this.groupes = data;
      console.log(this.groupes);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteGroupe(id:number){
    this.groupeService.delete(id).subscribe(res => {
         this.groupes = this.groupes.filter(item => item._id !== id);
         console.log('Groupe deleted successfully!');
    })
  }
}

