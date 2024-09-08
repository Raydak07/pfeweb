

import { CompanyfooterComponent } from '../../company/companyfooter/companyfooter.component';
import { CompanyheaderComponent } from '../../company/companyheader/companyheader.component';
import { CompanymenuComponent } from '../../company/companymenu/companymenu.component';




import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { AffgroupeService } from '../affgroupe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Affgroupe } from '../affgroupe';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  

@Component({
  selector: 'app-companyeditaffgroupe',
  standalone: true,
imports: [CommonModule, ReactiveFormsModule,CompanyfooterComponent,CompanyheaderComponent,CompanymenuComponent],
  templateUrl: './companyeditaffgroupe.component.html',
  styleUrl: './companyeditaffgroupe.component.css'
})
export class CompanyeditaffgroupeComponent {
  
  id!: number;
  affgroupe!: Affgroupe;
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public affgroupeService: AffgroupeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['affgroupeId'];
    this.affgroupeService.find(this.id).subscribe((data: Affgroupe)=>{
      this.affgroupe = data;
    }); 
        
    this.form = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    iduser: new FormControl('', [Validators.required]),
    idgroupe: new FormControl('', [Validators.required]),
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
    this.affgroupeService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Affgroupe updated successfully!');
         this.router.navigateByUrl('companyaffgroupe/index');
    })
  }
  
}