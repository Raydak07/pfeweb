

import { CompanyfooterComponent } from '../../company/companyfooter/companyfooter.component';
import { CompanyheaderComponent } from '../../company/companyheader/companyheader.component';
import { CompanymenuComponent } from '../../company/companymenu/companymenu.component';



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ProjetService } from '../projet.service';
import { Projet } from '../projet';

@Component({
  selector: 'app-companyindexprojet',
  standalone: true,
imports: [CommonModule, RouterModule,CompanyfooterComponent,CompanyheaderComponent,CompanymenuComponent],
  templateUrl: './companyindexprojet.component.html',
  styleUrl: './companyindexprojet.component.css'
})
export class CompanyindexprojetComponent {

  projets: Projet[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public projetService: ProjetService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.projetService.getAll().subscribe((data: Projet[])=>{
      this.projets = data;
      console.log(this.projets);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteProjet(id:number){
    this.projetService.delete(id).subscribe(res => {
         this.projets = this.projets.filter(item => item._id !== id);
         console.log('Projet deleted successfully!');
    })
  }
}