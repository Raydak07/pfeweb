

import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';







import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AvprojetService } from '../avprojet.service';
import { Avprojet } from '../avprojet';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
@Component({
  selector: 'app-userindexavprojet',
  standalone: true,
  imports: [UserfooterComponent,UsermenuComponent,UserheaderComponent,CommonModule, RouterModule],
  templateUrl: './userindexavprojet.component.html',
  styleUrl: './userindexavprojet.component.css'
})
export class UserindexavprojetComponent {


  avprojets: Avprojet[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public avprojetService: AvprojetService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.avprojetService.getAll().subscribe((data: Avprojet[])=>{
      this.avprojets = data;
      console.log(this.avprojets);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteAvprojet(id:number){
    this.avprojetService.delete(id).subscribe(res => {
         this.avprojets = this.avprojets.filter(item => item._id !== id);
         console.log('Avprojet deleted successfully!');
    })
  }
}