

import { CompanyfooterComponent } from '../../company/companyfooter/companyfooter.component';
import { CompanyheaderComponent } from '../../company/companyheader/companyheader.component';
import { CompanymenuComponent } from '../../company/companymenu/companymenu.component';





import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { AffprojetService } from '../affprojet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Affprojet } from '../affprojet';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  

@Component({
  selector: 'app-companyeditaffprojet',
  standalone: true,
imports: [CommonModule, ReactiveFormsModule,CompanyfooterComponent,CompanyheaderComponent,CompanymenuComponent],
  templateUrl: './companyeditaffprojet.component.html',
  styleUrl: './companyeditaffprojet.component.css'
})
export class CompanyeditaffprojetComponent {
  
  id!: number;
  affprojet!: Affprojet;
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public affprojetService: AffprojetService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['affprojetId'];
    this.affprojetService.find(this.id).subscribe((data: Affprojet)=>{
      this.affprojet = data;
    }); 
        
    this.form = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    iduser: new FormControl('', [Validators.required]),
    idprojet: new FormControl('', [Validators.required]),
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
    this.affprojetService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Affprojet updated successfully!');
         this.router.navigateByUrl('companyaffprojet/index');
    })
  }
  
}