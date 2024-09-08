





import { CompanyfooterComponent } from '../../company/companyfooter/companyfooter.component';
import { CompanyheaderComponent } from '../../company/companyheader/companyheader.component';
import { CompanymenuComponent } from '../../company/companymenu/companymenu.component';
import { Company } from '../company';


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { CompanyService } from '../company.service';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  
@Component({
  selector: 'app-companylogin',
  standalone: true,
  imports: [CommonModule,RouterModule, ReactiveFormsModule,CompanyfooterComponent,CompanyheaderComponent,CompanymenuComponent],
  templateUrl: './companylogin.component.html',
  styleUrl: './companylogin.component.css'
})
export class CompanyloginComponent {
  companys: Company[] = [];
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
    public companyService: CompanyService,
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
    this.companyService.getAll().subscribe((data: Company[])=>{
      this.companys = data;
      console.log(this.companys);
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
    const result = this.companys.find(({ email }) => email === this.form.value['email']);
  
     if(result)
     {
      this.myHero = 'email vérifié'
      const resultss = this.companys.find(({ motdepasse }) => motdepasse === this.form.value['motdepasse']);

          if(resultss)
            this.router.navigateByUrl('companycompany/index')
          else
          this.router.navigateByUrl('companylogin/');
      
  
     }
     else
     {
      this.myHero = 'email non existant vs devez votre email'
  
     }
  
}

}
