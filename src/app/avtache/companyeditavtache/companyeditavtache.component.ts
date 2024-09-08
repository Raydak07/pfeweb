

import { CompanyfooterComponent } from '../../company/companyfooter/companyfooter.component';
import { CompanyheaderComponent } from '../../company/companyheader/companyheader.component';
import { CompanymenuComponent } from '../../company/companymenu/companymenu.component';





import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { AvtacheService } from '../avtache.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Avtache } from '../avtache';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  
@Component({
  selector: 'app-companyeditavtache',
  standalone: true,
imports: [CommonModule, ReactiveFormsModule,CompanyfooterComponent,CompanyheaderComponent,CompanymenuComponent],
  templateUrl: './companyeditavtache.component.html',
  styleUrl: './companyeditavtache.component.css'
})
export class CompanyeditavtacheComponent {
  
  id!: number;
  avtache!: Avtache;
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public avtacheService: AvtacheService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['avtacheId'];
    this.avtacheService.find(this.id).subscribe((data: Avtache)=>{
      this.avtache = data;
    }); 
        
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
    this.avtacheService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Avtache updated successfully!');
         this.router.navigateByUrl('companyavtache/index');
    })
  }
  
}