





import { UserfooterComponent } from '../../user/userfooter/userfooter.component';
import { UserheaderComponent } from '../../user/userheader/userheader.component';
import { UsermenuComponent } from '../../user/usermenu/usermenu.component';
import { User } from '../user';


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { UserService } from '../user.service';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
  
@Component({
  selector: 'app-userlogin',
  standalone: true,
  imports: [CommonModule,RouterModule, ReactiveFormsModule,UserfooterComponent,UserheaderComponent,UsermenuComponent],
  templateUrl: './userlogin.component.html',
  styleUrl: './userlogin.component.css'
})
export class UserloginComponent {
  users: User[] = [];
  form!: FormGroup;
  public myHero = 'saisir vos paramtres de connexion:';   



  public az = " ";
  public ab = " ";
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public userService: UserService,
    private router: Router
  ) { }
      
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    motdepasse: new FormControl('', [Validators.required])
    
    });
    this.userService.getAll().subscribe((data: User[])=>{
      this.users = data;
      console.log(this.users);
    })  
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
    const result = this.users.find(({ email }) => email === this.form.value['email']);
  
     if(result)
     {
      this.myHero = 'email vérifié'
      const resultss = this.users.find(({ motdepasse }) => motdepasse === this.form.value['motdepasse']);

          if(resultss)
            this.router.navigateByUrl('userprojet/index')
          else
          this.router.navigateByUrl('userlogin/');
      
  
     }
     else
     {
      this.myHero = 'email non existant vs devez votre email'
  
     }
  
}

}
