


import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { GroupeService } from '../groupe.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  
@Component({
  selector: 'app-admincreategroupe',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,AdminfooterComponent,AdminheaderComponent,AdminmenuComponent],
  templateUrl: './admincreategroupe.component.html',
  styleUrl: './admincreategroupe.component.css'
})
export class AdmincreategroupeComponent {
  
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public groupeService: GroupeService,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    datecreation: new FormControl('', [Validators.required]),
    datemodification: new FormControl('', [Validators.required])
    });
  }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.form.value);
    this.groupeService.create(this.form.value).subscribe((res:any) => {
         console.log('Groupe created successfully!');
         this.router.navigateByUrl('groupe/index');
    })
  }
  
}