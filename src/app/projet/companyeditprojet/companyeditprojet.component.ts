
import { CompanyfooterComponent } from '../../company/companyfooter/companyfooter.component';
import { CompanyheaderComponent } from '../../company/companyheader/companyheader.component';
import { CompanymenuComponent } from '../../company/companymenu/companymenu.component';





import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { ProjetService } from '../projet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from '../projet';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  
@Component({
  selector: 'app-companyeditprojet',
  standalone: true,
imports: [CommonModule, ReactiveFormsModule,CompanyfooterComponent,CompanyheaderComponent,CompanymenuComponent],
  templateUrl: './companyeditprojet.component.html',
  styleUrl: './companyeditprojet.component.css'
})
export class CompanyeditprojetComponent {
  
  id!: number;
  projet!: Projet;
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public projetService: ProjetService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['projetId'];
    this.projetService.find(this.id).subscribe((data: Projet)=>{
      this.projet = data;
    }); 
        
    this.form = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    specialite: new FormControl('', [Validators.required]),
    etat: new FormControl('', [Validators.required]),
    datedebut: new FormControl('', [Validators.required]),
    datefin: new FormControl('', [Validators.required]),
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
    this.projetService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Projet updated successfully!');
         this.router.navigateByUrl('companyprojet/index');
    })
  }
  
}

