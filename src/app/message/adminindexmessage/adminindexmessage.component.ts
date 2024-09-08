


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MessageService } from '../message.service';
import { Message } from '../message';
import { AdminfooterComponent } from '../../admin/adminfooter/adminfooter.component';
import { AdminheaderComponent } from '../../admin/adminheader/adminheader.component';
import { AdminmenuComponent } from '../../admin/adminmenu/adminmenu.component';

@Component({
  selector: 'app-adminindexmessage',
  standalone: true,
  imports: [CommonModule, RouterModule,AdminfooterComponent,AdminheaderComponent,AdminmenuComponent],
  templateUrl: './adminindexmessage.component.html',
  styleUrl: './adminindexmessage.component.css'
})
export class AdminindexmessageComponent {
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