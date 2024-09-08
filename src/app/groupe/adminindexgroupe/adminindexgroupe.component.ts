



import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { GroupeService } from '../groupe.service';
import { Groupe } from '../groupe';
@Component({
  selector: 'app-adminindexgroupe',
  standalone: true,
  imports: [CommonModule, RouterModule,AdminfooterComponent,AdminheaderComponent,AdminmenuComponent],
  templateUrl: './adminindexgroupe.component.html',
  styleUrl: './adminindexgroupe.component.css'
})
export class AdminindexgroupeComponent {
  groupes: Groupe[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public groupeService: GroupeService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.groupeService.getAll().subscribe((data: Groupe[])=>{
      this.groupes = data;
      console.log(this.groupes);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteGroupe(id:number){
    this.groupeService.delete(id).subscribe(res => {
         this.groupes = this.groupes.filter(item => item._id !== id);
         console.log('Groupe deleted successfully!');
    })
  }
}