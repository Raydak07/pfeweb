

import { CompanyfooterComponent } from '../../company/companyfooter/companyfooter.component';
import { CompanyheaderComponent } from '../../company/companyheader/companyheader.component';
import { CompanymenuComponent } from '../../company/companymenu/companymenu.component';




import { Component } from '@angular/core';
  
import { UniversiteService } from '../universite.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Universite } from '../universite';
  
@Component({
  selector: 'app-companyviewuniversite',
  standalone: true,
imports: [CompanyfooterComponent,CompanyheaderComponent,CompanymenuComponent],
  templateUrl: './companyviewuniversite.component.html',
  styleUrl: './companyviewuniversite.component.css'
})
export class CompanyviewuniversiteComponent {
  
  id!: number;
  universite!: Universite;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public universiteService: UniversiteService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['universiteId'];
          
    this.universiteService.find(this.id).subscribe((data: Universite)=>{
      this.universite = data;
    });
  }
  
}