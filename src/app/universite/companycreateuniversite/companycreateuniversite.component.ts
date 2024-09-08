

import { CompanyfooterComponent } from '../../company/companyfooter/companyfooter.component';
import { CompanyheaderComponent } from '../../company/companyheader/companyheader.component';
import { CompanymenuComponent } from '../../company/companymenu/companymenu.component';



import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { UniversiteService } from '../universite.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  
@Component({
  selector: 'app-companycreateuniversite',
  standalone: true,
imports: [CommonModule, ReactiveFormsModule,CompanyfooterComponent,CompanyheaderComponent,CompanymenuComponent],
  templateUrl: './companycreateuniversite.component.html',
  styleUrl: './companycreateuniversite.component.css'
})
export class CompanycreateuniversiteComponent {
  
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public universiteService: UniversiteService,
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
    adresse: new FormControl('', [Validators.required]),
    tel: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    siteweb: new FormControl('', [Validators.required]),
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
    this.universiteService.create(this.form.value).subscribe((res:any) => {
         console.log('Universite created successfully!');
         this.router.navigateByUrl('companyuniversite/index');
    })
  }
  
}

