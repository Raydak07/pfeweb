
import { CompanyfooterComponent } from '../../company/companyfooter/companyfooter.component';
import { CompanyheaderComponent } from '../../company/companyheader/companyheader.component';
import { CompanymenuComponent } from '../../company/companymenu/companymenu.component';





import { Component } from '@angular/core';
  
import { AvtacheService } from '../avtache.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Avtache } from '../avtache';
  
@Component({
  selector: 'app-companyviewavtache',
  standalone: true,
imports: [CompanyfooterComponent,CompanyheaderComponent,CompanymenuComponent],
  templateUrl: './companyviewavtache.component.html',
  styleUrl: './companyviewavtache.component.css'
})
export class CompanyviewavtacheComponent {

  
  id!: number;
  avtache!: Avtache;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public avtacheService: AvtacheService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['avtacheId'];
          
    this.avtacheService.find(this.id).subscribe((data: Avtache)=>{
      this.avtache = data;
    });
  }
  
}