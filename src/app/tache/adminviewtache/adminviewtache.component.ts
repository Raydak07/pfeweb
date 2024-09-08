


import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';




import { Component } from '@angular/core';
  
import { TacheService } from '../tache.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tache } from '../tache';
  

@Component({
  selector: 'app-adminviewtache',
  standalone: true,
  imports: [AdminfooterComponent,AdminheaderComponent,AdminmenuComponent],
  templateUrl: './adminviewtache.component.html',
  styleUrl: './adminviewtache.component.css'
})
export class AdminviewtacheComponent {
  
  id!: number;
  tache!: Tache;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public tacheService: TacheService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['tacheId'];
          
    this.tacheService.find(this.id).subscribe((data: Tache)=>{
      this.tache = data;
    });
  }
  
}