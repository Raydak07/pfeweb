

import { CompanyfooterComponent } from '../../company/companyfooter/companyfooter.component';
import { CompanyheaderComponent } from '../../company/companyheader/companyheader.component';
import { CompanymenuComponent } from '../../company/companymenu/companymenu.component';



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ProfilService } from '../profil.service';
import { Profil } from '../profil';
@Component({
  selector: 'app-companyindexprofil',
  standalone: true,
imports: [CommonModule, RouterModule,CompanyfooterComponent,CompanyheaderComponent,CompanymenuComponent],
  templateUrl: './companyindexprofil.component.html',
  styleUrl: './companyindexprofil.component.css'
})
export class CompanyindexprofilComponent {
  profils: Profil[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public profilService: ProfilService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.profilService.getAll().subscribe((data: Profil[])=>{
      this.profils = data;
      console.log(this.profils);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteProfil(id:number){
    this.profilService.delete(id).subscribe(res => {
         this.profils = this.profils.filter(item => item._id !== id);
         console.log('Profil deleted successfully!');
    })
  }
}