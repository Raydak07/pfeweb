


import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';




import { Component } from '@angular/core';
  
import { UniversiteService } from '../universite.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Universite } from '../universite';
  
@Component({
  selector: 'app-adminviewuniversite',
  standalone: true,
  imports: [AdminfooterComponent,AdminheaderComponent,AdminmenuComponent],
  templateUrl: './adminviewuniversite.component.html',
  styleUrl: './adminviewuniversite.component.css'
})
export class AdminviewuniversiteComponent {
  
  id!: number;
  universite!: Universite;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public universiteService: UniversiteService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['universiteId'];
          
    this.universiteService.find(this.id).subscribe((data: Universite)=>{
      this.universite = data;
    });
  }
  
}