





import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AdminfooterComponent } from '../admin/adminfooter/adminfooter.component';
import { AdminheaderComponent } from '../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../admin/adminmenu/adminmenu.component';
import { Projet } from '../projet/projet';
import { ProjetService } from '../projet/projet.service';



  @Component({
    selector: 'app-frontindex',
    standalone: true,
    imports: [CommonModule, RouterModule,AdminfooterComponent,AdminheaderComponent,AdminmenuComponent],
    templateUrl: './frontindex.component.html',
    styleUrl: './frontindex.component.css'
  })
  export class FrontindexComponent {

  projets: Projet[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public projetService: ProjetService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.projetService.getAll().subscribe((data: Projet[])=>{
      this.projets = data;
      console.log(this.projets);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteProjet(id:number){
    this.projetService.delete(id).subscribe(res => {
         this.projets = this.projets.filter(item => item._id !== id);
         console.log('Projet deleted successfully!');
    })
  }
}