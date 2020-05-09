import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LoginService } from '../services/login.service';
import { Carro } from '../models/carro';
@Component({
  selector: 'app-carrocreate',
  templateUrl: './carrocreate.page.html',
  styleUrls: ['./carrocreate.page.scss'],
})
export class CarrocreatePage implements OnInit {
  ab: any = false;
  nome:any;
  primeiro: any;
  data: Carro;
  resposta: any;
  pessoas:any = []; 
  constructor(
    public router: Router,
    private menu: MenuController,
    public loginService: LoginService,
  ) { 
    this.data = new Carro();
  }

  ngOnInit() {
    
  }
  a(){
    if(this.ab == false){
      this.ab = true;
    }else{
      this.ab = false;
    }
  }

  sair(){
    this.router.navigate(['login']);
  }


  submitForm() {
    this.loginService.postcarro(this.data).subscribe((response=>{
      this.router.navigate(['carro']);
    }))
   }

}
