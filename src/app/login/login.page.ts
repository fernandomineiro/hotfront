import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  data: Login;
  resposta: any;
  constructor(
    public loginService: LoginService,
    public router: Router
  ) { 
    this.data = new Login();
  }
 
  ngOnInit() {
  }

  logar(){
    this.loginService.postLogin(this.data).subscribe((response=>{
      if(response[0] == ""){
        this.resposta = true;
      }
      else{
        localStorage.setItem('usuarioadmin', response[0][0]['nome']);
        this.router.navigate(['admina']);
        
      }
    }))
  }

  sair(){
    
    this.router.navigate(['home']);
 
  }

}
