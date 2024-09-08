





import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AffprojetService } from '../affprojet.service';
import { Affprojet } from '../affprojet';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
@Component({
  selector: 'app-adminindexaffprojet',
  standalone: true,
  imports: [CommonModule, RouterModule,AdminfooterComponent,AdminheaderComponent,AdminmenuComponent],
  templateUrl: './adminindexaffprojet.component.html',
  styleUrl: './adminindexaffprojet.component.css'
})
export class AdminindexaffprojetComponent {


  affprojets: Affprojet[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public affprojetService: AffprojetService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.affprojetService.getAll().subscribe((data: Affprojet[])=>{
      this.affprojets = data;
      console.log(this.affprojets);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteAffprojet(id:number){
    this.affprojetService.delete(id).subscribe(res => {
         this.affprojets = this.affprojets.filter(item => item._id !== id);
         console.log('Affprojet deleted successfully!');
    })
  }
}