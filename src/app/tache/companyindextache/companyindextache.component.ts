
import { CompanyfooterComponent } from '../../company/companyfooter/companyfooter.component';
import { CompanyheaderComponent } from '../../company/companyheader/companyheader.component';
import { CompanymenuComponent } from '../../company/companymenu/companymenu.component';


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { TacheService } from '../tache.service';
import { Tache } from '../tache';
@Component({
  selector: 'app-companyindextache',
  standalone: true,
imports: [CommonModule, RouterModule,CompanyfooterComponent,CompanyheaderComponent,CompanymenuComponent],
  templateUrl: './companyindextache.component.html',
  styleUrl: './companyindextache.component.css'
})
export class CompanyindextacheComponent {
  taches: Tache[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public tacheService: TacheService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.tacheService.getAll().subscribe((data: Tache[])=>{
      this.taches = data;
      console.log(this.taches);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteTache(id:number){
    this.tacheService.delete(id).subscribe(res => {
         this.taches = this.taches.filter(item => item._id !== id);
         console.log('Tache deleted successfully!');
    })
  }
}

