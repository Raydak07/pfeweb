

import { CompanyfooterComponent } from '../../company/companyfooter/companyfooter.component';
import { CompanyheaderComponent } from '../../company/companyheader/companyheader.component';
import { CompanymenuComponent } from '../../company/companymenu/companymenu.component';




import { Component } from '@angular/core';
  
import { AffgroupeService } from '../affgroupe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Affgroupe } from '../affgroupe';
  
@Component({
  selector: 'app-companyviewaffgroupe',
  standalone: true,
imports: [CompanyfooterComponent,CompanyheaderComponent,CompanymenuComponent],
  templateUrl: './companyviewaffgroupe.component.html',
  styleUrl: './companyviewaffgroupe.component.css'
})
export class CompanyviewaffgroupeComponent {
  
  id!: number;
  affgroupe!: Affgroupe;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public affgroupeService: AffgroupeService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['affgroupeId'];
          
    this.affgroupeService.find(this.id).subscribe((data: Affgroupe)=>{
      this.affgroupe = data;
    });
  }
  
}