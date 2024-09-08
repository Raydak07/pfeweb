
import { CompanyfooterComponent } from '../../company/companyfooter/companyfooter.component';
import { CompanyheaderComponent } from '../../company/companyheader/companyheader.component';
import { CompanymenuComponent } from '../../company/companymenu/companymenu.component';





import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { AvprojetService } from '../avprojet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Avprojet } from '../avprojet';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-companyeditavprojet',
  standalone: true,
imports: [CommonModule, ReactiveFormsModule,CompanyfooterComponent,CompanyheaderComponent,CompanymenuComponent],
  templateUrl: './companyeditavprojet.component.html',
  styleUrl: './companyeditavprojet.component.css'
})
export class CompanyeditavprojetComponent {
  
  id!: number;
  avprojet!: Avprojet;
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public avprojetService: AvprojetService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['avprojetId'];
    this.avprojetService.find(this.id).subscribe((data: Avprojet)=>{
      this.avprojet = data;
    }); 
        
    this.form = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    idprojet: new FormControl('', [Validators.required]),
    pourcentagevanacement: new FormControl('', [Validators.required]),
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
    this.avprojetService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Avprojet updated successfully!');
         this.router.navigateByUrl('companyavprojet/index');
    })
  }
  
}

