


import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { TacheService } from '../tache.service';
import { Tache } from '../tache';
@Component({
  selector: 'app-adminindextache',
  standalone: true,
  imports: [CommonModule, RouterModule,AdminfooterComponent,AdminheaderComponent,AdminmenuComponent],
  templateUrl: './adminindextache.component.html',
  styleUrl: './adminindextache.component.css'
})
export class AdminindextacheComponent {
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