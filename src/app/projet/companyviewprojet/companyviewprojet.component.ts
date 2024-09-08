
import { CompanyfooterComponent } from '../../company/companyfooter/companyfooter.component';
import { CompanyheaderComponent } from '../../company/companyheader/companyheader.component';
import { CompanymenuComponent } from '../../company/companymenu/companymenu.component';






import { Component } from '@angular/core';
  
import { ProjetService } from '../projet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from '../projet';
  
@Component({
  selector: 'app-companyviewprojet',
  standalone: true,
imports: [CompanyfooterComponent,CompanyheaderComponent,CompanymenuComponent],
  templateUrl: './companyviewprojet.component.html',
  styleUrl: './companyviewprojet.component.css'
})
export class CompanyviewprojetComponent {
  
  id!: number;
  projet!: Projet;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public projetService: ProjetService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['projetId'];
          
    this.projetService.find(this.id).subscribe((data: Projet)=>{
      this.projet = data;
    });
  }
  
}