

import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { UniversiteService } from '../universite.service';
import { Universite } from '../universite';
@Component({
  selector: 'app-adminindexuniversite',
  standalone: true,
  imports: [CommonModule, RouterModule,AdminfooterComponent,AdminheaderComponent,AdminmenuComponent],
  templateUrl: './adminindexuniversite.component.html',
  styleUrl: './adminindexuniversite.component.css'
})
export class AdminindexuniversiteComponent {
  universites: Universite[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public universiteService: UniversiteService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.universiteService.getAll().subscribe((data: Universite[])=>{
      this.universites = data;
      console.log(this.universites);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteUniversite(id:number){
    this.universiteService.delete(id).subscribe(res => {
         this.universites = this.universites.filter(item => item._id !== id);
         console.log('Universite deleted successfully!');
    })
  }
}