

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MessageService } from '../message.service';
import { Message } from '../message';
import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';

@Component({
  selector: 'app-userindexmessage',
  standalone: true,
  imports: [CommonModule, RouterModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './userindexmessage.component.html',
  styleUrl: './userindexmessage.component.css'
})
export class UserindexmessageComponent {
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