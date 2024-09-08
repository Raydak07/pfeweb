



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AfftacheService } from '../afftache.service';
import { Afftache } from '../afftache';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
@Component({
  selector: 'app-adminindexafftache',
  standalone: true,
  imports: [CommonModule, RouterModule,AdminfooterComponent,AdminheaderComponent,AdminmenuComponent],
  templateUrl: './adminindexafftache.component.html',
  styleUrl: './adminindexafftache.component.css'
})
export class AdminindexafftacheComponent {
  afftaches: Afftache[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public afftacheService: AfftacheService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.afftacheService.getAll().subscribe((data: Afftache[])=>{
      this.afftaches = data;
      console.log(this.afftaches);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteAfftache(id:number){
    this.afftacheService.delete(id).subscribe(res => {
         this.afftaches = this.afftaches.filter(item => item._id !== id);
         console.log('Afftache deleted successfully!');
    })
  }
}