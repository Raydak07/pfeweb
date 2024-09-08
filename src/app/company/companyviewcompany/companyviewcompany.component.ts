

import { CompanyfooterComponent } from '../../company/companyfooter/companyfooter.component';
import { CompanyheaderComponent } from '../../company/companyheader/companyheader.component';
import { CompanymenuComponent } from '../../company/companymenu/companymenu.component';




import { Component } from '@angular/core';
  
import { CompanyService } from '../company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../company';
  
@Component({
  selector: 'app-companyviewcompany',
  standalone: true,
imports: [CompanyfooterComponent,CompanyheaderComponent,CompanymenuComponent],
  templateUrl: './companyviewcompany.component.html',
  styleUrl: './companyviewcompany.component.css'
})
export class CompanyviewcompanyComponent {
  
  id!: number;
  company!: Company;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['companyId'];
          
    this.companyService.find(this.id).subscribe((data: Company)=>{
      this.company = data;
    });
  }
  
}