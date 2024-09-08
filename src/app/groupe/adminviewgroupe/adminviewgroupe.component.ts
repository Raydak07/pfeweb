


import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';




import { Component } from '@angular/core';
  
import { GroupeService } from '../groupe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Groupe } from '../groupe';
  
@Component({
  selector: 'app-adminviewgroupe',
  standalone: true,
  imports: [AdminfooterComponent,AdminheaderComponent,AdminmenuComponent],
  templateUrl: './adminviewgroupe.component.html',
  styleUrl: './adminviewgroupe.component.css'
})
export class AdminviewgroupeComponent {
  
  id!: number;
  groupe!: Groupe;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public groupeService: GroupeService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['groupeId'];
          
    this.groupeService.find(this.id).subscribe((data: Groupe)=>{
      this.groupe = data;
    });
  }
  
}