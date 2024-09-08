

import { CompanyfooterComponent } from '../../company/companyfooter/companyfooter.component';
import { CompanyheaderComponent } from '../../company/companyheader/companyheader.component';
import { CompanymenuComponent } from '../../company/companymenu/companymenu.component';



import { Component } from '@angular/core';
  
import { AffprojetService } from '../affprojet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Affprojet } from '../affprojet';
  

@Component({
  selector: 'app-companyviewaffprojet',
  standalone: true,
imports: [CompanyfooterComponent,CompanyheaderComponent,CompanymenuComponent],
  templateUrl: './companyviewaffprojet.component.html',
  styleUrl: './companyviewaffprojet.component.css'
})
export class CompanyviewaffprojetComponent {
  
  id!: number;
  affprojet!: Affprojet;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public affprojetService: AffprojetService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['affprojetId'];
          
    this.affprojetService.find(this.id).subscribe((data: Affprojet)=>{
      this.affprojet = data;
    });
  }
  
}