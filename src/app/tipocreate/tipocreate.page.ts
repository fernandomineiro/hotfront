import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LoginService } from '../services/login.service';
import { Tipo } from '../models/tipo';

@Component({
  selector: 'app-tipocreate',
  templateUrl: './tipocreate.page.html',
  styleUrls: ['./tipocreate.page.scss'],
})
export class TipocreatePage implements OnInit {
  ab: any = false;
  nome:any;
  primeiro: any;
  data: Tipo;
  resposta: any;
  pessoas:any = [];
  constructor(
    public router: Router,
    private menu: MenuController,
    public loginService: LoginService,
  ) { 
    this.data = new Tipo();
  }

  ngOnInit() {
    this.nome = localStorage.getItem("usuarioadmin");
    this.primeiro = (this.nome.substring(0,1));
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
   this.loginService.posttipo(this.data).subscribe((response=>{
    this.router.navigate(['tipo']);
   }))
  }
}
