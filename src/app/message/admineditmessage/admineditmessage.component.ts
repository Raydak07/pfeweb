








import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { MessageService } from '../message.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from '../message';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';
  
@Component({
  selector: 'app-admineditmessage',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,AdminfooterComponent,AdminheaderComponent,AdminmenuComponent],
  templateUrl: './admineditmessage.component.html',
  styleUrl: './admineditmessage.component.css'
})
export class AdmineditmessageComponent {
  
  id!: number;
  message!: Message;
  form!: FormGroup;
      
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.id = this.route.snapshot.params['messageId'];
    this.messageService.find(this.id).subscribe((data: Message)=>{
      this.message = data;
    }); 
        
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
    this.messageService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Message updated successfully!');
         this.router.navigateByUrl('message/index');
    })
  }
  
}