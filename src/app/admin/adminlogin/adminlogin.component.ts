


import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
import { Admin } from '../admin';


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { AdminService } from '../admin.service';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  
@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,AdminfooterComponent,AdminheaderComponent,AdminmenuComponent,RouterModule],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  admins: Admin[] = [];
  form!: FormGroup;
  public myHero = 'saisir vos paramtres de connexion:';   



  public az = " ";
  public ab = " ";
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
    this.adminService.getAll().subscribe((data: Admin[])=>{
      this.admins = data;
      console.log(this.admins);
    })  
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
    const result = this.admins.find(({ email }) => email === this.form.value['email']);
  
     if(result)
     {
      this.myHero = 'email vérifié'
      const resultss = this.admins.find(({ motdepasse }) => motdepasse === this.form.value['motdepasse']);

          if(resultss)
            this.router.navigateByUrl('admin/index')
          else
          this.router.navigateByUrl('admin/');
      
  
     }
     else
     {
      this.myHero = 'email non existant vs devez votre email'
  
     }
  
}

}
