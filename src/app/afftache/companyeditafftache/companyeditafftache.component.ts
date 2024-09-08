

import { CompanyfooterComponent } from '../../company/companyfooter/companyfooter.component';
import { CompanyheaderComponent } from '../../company/companyheader/companyheader.component';
import { CompanymenuComponent } from '../../company/companymenu/companymenu.component';




import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { AfftacheService } from '../afftache.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Afftache } from '../afftache';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  
@Component({
  selector: 'app-companyeditafftache',
  standalone: true,
imports: [CommonModule, ReactiveFormsModule,CompanyfooterComponent,CompanyheaderComponent,CompanymenuComponent],
  templateUrl: './companyeditafftache.component.html',
  styleUrl: './companyeditafftache.component.css'
})
export class CompanyeditafftacheComponent {
  
  id!: number;
  afftache!: Afftache;
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public afftacheService: AfftacheService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['afftacheId'];
    this.afftacheService.find(this.id).subscribe((data: Afftache)=>{
      this.afftache = data;
    }); 
        
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
    this.afftacheService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Afftache updated successfully!');
         this.router.navigateByUrl('companyafftache/index');
    })
  }
  
}