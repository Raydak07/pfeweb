


import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';




import { Component } from '@angular/core';
  
import { AffgroupeService } from '../affgroupe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Affgroupe } from '../affgroupe';
  
@Component({
  selector: 'app-adminviewaffgroupe',
  standalone: true,
  imports: [AdminfooterComponent,AdminheaderComponent,AdminmenuComponent],
  templateUrl: './adminviewaffgroupe.component.html',
  styleUrl: './adminviewaffgroupe.component.css'
})
export class AdminviewaffgroupeComponent {
  
  id!: number;
  affgroupe!: Affgroupe;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public affgroupeService: AffgroupeService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['affgroupeId'];
          
    this.affgroupeService.find(this.id).subscribe((data: Affgroupe)=>{
      this.affgroupe = data;
    });
  }
  
}