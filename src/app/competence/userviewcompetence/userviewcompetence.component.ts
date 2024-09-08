

import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';



import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';




import { Component } from '@angular/core';
  
import { CompetenceService } from '../competence.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Competence } from '../competence';
  
@Component({
  selector: 'app-userviewcompetence',
  standalone: true,
  imports: [UserfooterComponent,UsermenuComponent,UserheaderComponent],
  templateUrl: './userviewcompetence.component.html',
  styleUrl: './userviewcompetence.component.css'
})
export class UserviewcompetenceComponent {
  
  id!: number;
  competence!: Competence;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public competenceService: CompetenceService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['competenceId'];
          
    this.competenceService.find(this.id).subscribe((data: Competence)=>{
      this.competence = data;
    });
  }
  
}