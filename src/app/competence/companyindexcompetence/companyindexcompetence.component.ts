

import { CompanyfooterComponent } from '../../company/companyfooter/companyfooter.component';
import { CompanyheaderComponent } from '../../company/companyheader/companyheader.component';
import { CompanymenuComponent } from '../../company/companymenu/companymenu.component';



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CompetenceService } from '../competence.service';
import { Competence } from '../competence';
@Component({
  selector: 'app-companyindexcompetence',
  standalone: true,
imports: [CommonModule, RouterModule,CompanyfooterComponent,CompanyheaderComponent,CompanymenuComponent],
  templateUrl: './companyindexcompetence.component.html',
  styleUrl: './companyindexcompetence.component.css'
})
export class CompanyindexcompetenceComponent {
  competences: Competence[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public competenceService: CompetenceService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.competenceService.getAll().subscribe((data: Competence[])=>{
      this.competences = data;
      console.log(this.competences);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteCompetence(id:number){
    this.competenceService.delete(id).subscribe(res => {
         this.competences = this.competences.filter(item => item._id !== id);
         console.log('Competence deleted successfully!');
    })
  }
}