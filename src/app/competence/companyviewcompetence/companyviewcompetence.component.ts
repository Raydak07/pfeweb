

import { CompanyfooterComponent } from '../../company/companyfooter/companyfooter.component';
import { CompanyheaderComponent } from '../../company/companyheader/companyheader.component';
import { CompanymenuComponent } from '../../company/companymenu/companymenu.component';






import { Component } from '@angular/core';
  
import { CompetenceService } from '../competence.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Competence } from '../competence';
  

@Component({
  selector: 'app-companyviewcompetence',
  standalone: true,
imports: [CompanyfooterComponent,CompanyheaderComponent,CompanymenuComponent],
  templateUrl: './companyviewcompetence.component.html',
  styleUrl: './companyviewcompetence.component.css'
})
export class CompanyviewcompetenceComponent {
  
  id!: number;
  competence!: Competence;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public competenceService: CompetenceService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['competenceId'];
          
    this.competenceService.find(this.id).subscribe((data: Competence)=>{
      this.competence = data;
    });
  }
  
}