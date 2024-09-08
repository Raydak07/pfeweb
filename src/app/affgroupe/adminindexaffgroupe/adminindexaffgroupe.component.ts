




import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AffgroupeService } from '../affgroupe.service';
import { Affgroupe } from '../affgroupe';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';

@Component({
  selector: 'app-adminindexaffgroupe',
  standalone: true,
  imports: [CommonModule, RouterModule,AdminfooterComponent,AdminheaderComponent,AdminmenuComponent],
  templateUrl: './adminindexaffgroupe.component.html',
  styleUrl: './adminindexaffgroupe.component.css'
})
export class AdminindexaffgroupeComponent {


  affgroupes: Affgroupe[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public affgroupeService: AffgroupeService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.affgroupeService.getAll().subscribe((data: Affgroupe[])=>{
      this.affgroupes = data;
      console.log(this.affgroupes);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteAffgroupe(id:number){
    this.affgroupeService.delete(id).subscribe(res => {
         this.affgroupes = this.affgroupes.filter(item => item._id !== id);
         console.log('Affgroupe deleted successfully!');
    })
  }
}