

import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';



import { Component } from '@angular/core';
  
import { UniversiteService } from '../universite.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Universite } from '../universite';
  
@Component({
  selector: 'app-userviewuniversite',
  standalone: true,
  imports: [UserfooterComponent,UsermenuComponent,UserheaderComponent],
  templateUrl: './userviewuniversite.component.html',
  styleUrl: './userviewuniversite.component.css'
})
export class UserviewuniversiteComponent {
  
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