
import { CompanyfooterComponent } from '../../company/companyfooter/companyfooter.component';
import { CompanyheaderComponent } from '../../company/companyheader/companyheader.component';
import { CompanymenuComponent } from '../../company/companymenu/companymenu.component';





import { Component } from '@angular/core';
  
import { AfftacheService } from '../afftache.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Afftache } from '../afftache';
  
@Component({
  selector: 'app-companyviewafftache',
  standalone: true,
imports: [CompanyfooterComponent,CompanyheaderComponent,CompanymenuComponent],
  templateUrl: './companyviewafftache.component.html',
  styleUrl: './companyviewafftache.component.css'
})
export class CompanyviewafftacheComponent {
  
  id!: number;
  afftache!: Afftache;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public afftacheService: AfftacheService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['afftacheId'];
          
    this.afftacheService.find(this.id).subscribe((data: Afftache)=>{
      this.afftache = data;
    });
  }
  
}