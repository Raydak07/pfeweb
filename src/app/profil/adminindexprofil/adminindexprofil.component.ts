

import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ProfilService } from '../profil.service';
import { Profil } from '../profil';
@Component({
  selector: 'app-adminindexprofil',
  standalone: true,
  imports: [CommonModule, RouterModule,AdminfooterComponent,AdminheaderComponent,AdminmenuComponent],
  templateUrl: './adminindexprofil.component.html',
  styleUrl: './adminindexprofil.component.css'
})
export class AdminindexprofilComponent {
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