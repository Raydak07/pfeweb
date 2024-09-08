

import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';


import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CompetenceService } from '../competence.service';
import { Competence } from '../competence';
@Component({
  selector: 'app-userindexcompetence',
  standalone: true,
  imports: [UserfooterComponent,UsermenuComponent,UserheaderComponent,CommonModule, RouterModule],
  templateUrl: './userindexcompetence.component.html',
  styleUrl: './userindexcompetence.component.css'
})
export class UserindexcompetenceComponent {
  competences: Competence[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public competenceService: CompetenceService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.competenceService.getAll().subscribe((data: Competence[])=>{
      this.competences = data;
      console.log(this.competences);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteCompetence(id:number){
    this.competenceService.delete(id).subscribe(res => {
         this.competences = this.competences.filter(item => item._id !== id);
         console.log('Competence deleted successfully!');
    })
  }
}