






import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AvprojetService } from '../avprojet.service';
import { Avprojet } from '../avprojet';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
@Component({
  selector: 'app-adminindexavprojet',
  standalone: true,
  imports: [CommonModule, RouterModule,AdminfooterComponent,AdminheaderComponent,AdminmenuComponent],
  templateUrl: './adminindexavprojet.component.html',
  styleUrl: './adminindexavprojet.component.css'
})
export class AdminindexavprojetComponent {


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