

import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';



import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { AvtacheService } from '../avtache.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-usercreateavtache',
  standalone: true,
  imports: [UserfooterComponent,UsermenuComponent,UserheaderComponent,CommonModule, ReactiveFormsModule],
  templateUrl: './usercreateavtache.component.html',
  styleUrl: './usercreateavtache.component.css'
})
export class UsercreateavtacheComponent {
  
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public avtacheService: AvtacheService,
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
    idtache: new FormControl('', [Validators.required]),
    pourcentagevanacement: new FormControl('', [Validators.required]),
    datecreation: new FormControl('', [Validators.required]),
    datemodification:new FormControl('', [Validators.required])
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
    this.avtacheService.create(this.form.value).subscribe((res:any) => {
         console.log('Avtache created successfully!');
         this.router.navigateByUrl('useravtache/index');
    })
  }
  
}