


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MessageService } from '../message.service';
import { Message } from '../message';
import { CompanyfooterComponent } from '../../company/companyfooter/companyfooter.component';
import { CompanyheaderComponent } from '../../company/companyheader/companyheader.component';
import { CompanymenuComponent } from '../../company/companymenu/companymenu.component';

@Component({
  selector: 'app-companyindexmessage',
  standalone: true,
  imports: [CommonModule, RouterModule,CompanyfooterComponent,CompanyheaderComponent,CompanymenuComponent],
  templateUrl: './companyindexmessage.component.html',
  styleUrl: './companyindexmessage.component.css'
})
export class CompanyindexmessageComponent {
  messages: Message[] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public messageService: MessageService, private router: Router) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    console.log(this.router.url);
    console.log( window.location.href);
    this.messageService.getAll().subscribe((data: Message[])=>{
      this.messages = data;
      console.log(this.messages);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteMessage(id:number){
    this.messageService.delete(id).subscribe(res => {
         this.messages = this.messages.filter(item => item._id !== id);
         console.log('Message deleted successfully!');
    })
  }
}