

import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';



import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';




import { Component } from '@angular/core';
  
import { AvtacheService } from '../avtache.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Avtache } from '../avtache';
  
@Component({
  selector: 'app-userviewavtache',
  standalone: true,
  imports: [UserfooterComponent,UsermenuComponent,UserheaderComponent],
  templateUrl: './userviewavtache.component.html',
  styleUrl: './userviewavtache.component.css'
})
export class UserviewavtacheComponent {
  
  id!: number;
  avtache!: Avtache;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public avtacheService: AvtacheService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['avtacheId'];
          
    this.avtacheService.find(this.id).subscribe((data: Avtache)=>{
      this.avtache = data;
    });
  }
  
}