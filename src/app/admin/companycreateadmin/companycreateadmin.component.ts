



  import { CompanyfooterComponent } from '../../company/companyfooter/companyfooter.component';
  import { CompanyheaderComponent } from '../../company/companyheader/companyheader.component';
  import { CompanymenuComponent } from '../../company/companymenu/companymenu.component';


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  

@Component({
  selector: 'app-companycreateadmin',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,CompanyfooterComponent,CompanyheaderComponent,CompanymenuComponent],
  templateUrl: './companycreateadmin.component.html',
  styleUrl: './companycreateadmin.component.css'
})
export class CompanycreateadminComponent {
  
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public adminService: AdminService,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    motdepasse: new FormControl('', [Validators.required])
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
    this.adminService.create(this.form.value).subscribe((res:any) => {
         console.log('Admin created successfully!');
         this.router.navigateByUrl('companyadmin/index');
    })
  }
  
}