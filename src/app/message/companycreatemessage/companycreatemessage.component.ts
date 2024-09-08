





import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { MessageService } from '../message.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CompanyfooterComponent } from '../../company/companyfooter/companyfooter.component';
import { CompanyheaderComponent } from '../../company/companyheader/companyheader.component';
import { CompanymenuComponent } from '../../company/companymenu/companymenu.component';
  

@Component({
  selector: 'app-companycreatemessage',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,CompanyfooterComponent,CompanyheaderComponent,CompanymenuComponent],
  templateUrl: './companycreatemessage.component.html',
  styleUrl: './companycreatemessage.component.css'
})
export class CompanycreatemessageComponent {
  
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public messageService: MessageService,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      nomenvoi: new FormControl('', [Validators.required]),
      sujet: new FormControl('', [Validators.required]),
      texte: new FormControl('', [Validators.required]),
      etat: new FormControl('', [Validators.required]),
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
    this.messageService.create(this.form.value).subscribe((res:any) => {
         console.log('Message created successfully!');
         this.router.navigateByUrl('message/index');
    })
  }
  
}