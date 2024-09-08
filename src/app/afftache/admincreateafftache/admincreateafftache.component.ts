


import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { AfftacheService } from '../afftache.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  
@Component({
  selector: 'app-admincreateafftache',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,AdminfooterComponent,AdminheaderComponent,AdminmenuComponent],
  templateUrl: './admincreateafftache.component.html',
  styleUrl: './admincreateafftache.component.css'
})
export class AdmincreateafftacheComponent {
  
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public afftacheService: AfftacheService,
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
    iduser: new FormControl('', [Validators.required]),
    idtache: new FormControl('', [Validators.required]),
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
    this.afftacheService.create(this.form.value).subscribe((res:any) => {
         console.log('Afftache created successfully!');
         this.router.navigateByUrl('afftache/index');
    })
  }
  
}