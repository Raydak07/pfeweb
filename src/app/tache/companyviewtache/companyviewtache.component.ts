

import { CompanyfooterComponent } from '../../company/companyfooter/companyfooter.component';
import { CompanyheaderComponent } from '../../company/companyheader/companyheader.component';
import { CompanymenuComponent } from '../../company/companymenu/companymenu.component';






import { Component } from '@angular/core';
  
import { TacheService } from '../tache.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tache } from '../tache';
  

@Component({
  selector: 'app-companyviewtache',
  standalone: true,
imports: [CompanyfooterComponent,CompanyheaderComponent,CompanymenuComponent],
  templateUrl: './companyviewtache.component.html',
  styleUrl: './companyviewtache.component.css'
})
export class CompanyviewtacheComponent {
  
  id!: number;
  tache!: Tache;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public tacheService: TacheService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['tacheId'];
          
    this.tacheService.find(this.id).subscribe((data: Tache)=>{
      this.tache = data;
    });
  }
  
}