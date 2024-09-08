


import { Component } from '@angular/core';
  
import { MessageService } from '../message.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from '../message';
import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';
  
@Component({
  selector: 'app-userviewmessage',
  standalone: true,
  imports: [UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './userviewmessage.component.html',
  styleUrl: './userviewmessage.component.css'
})
export class UserviewmessageComponent {
  id!: number;
  message!: Message;
      
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
  }
  
}