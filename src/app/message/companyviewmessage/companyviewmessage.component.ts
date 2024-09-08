




import { Component } from '@angular/core';
  
import { MessageService } from '../message.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from '../message';
import { CompanyfooterComponent } from '../../company/companyfooter/companyfooter.component';
import { CompanyheaderComponent } from '../../company/companyheader/companyheader.component';
import { CompanymenuComponent } from '../../company/companymenu/companymenu.component';

  
@Component({
  selector: 'app-companyviewmessage',
  standalone: true,
  imports: [CompanyfooterComponent,CompanyheaderComponent,CompanymenuComponent],
  templateUrl: './companyviewmessage.component.html',
  styleUrl: './companyviewmessage.component.css'
})
export class CompanyviewmessageComponent {
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