


import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';




import { Component } from '@angular/core';
  
import { ProjetService } from '../projet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from '../projet';
  
@Component({
  selector: 'app-adminviewprojet',
  standalone: true,
  imports: [AdminfooterComponent,AdminheaderComponent,AdminmenuComponent],
  templateUrl: './adminviewprojet.component.html',
  styleUrl: './adminviewprojet.component.css'
})
export class AdminviewprojetComponent {
  
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