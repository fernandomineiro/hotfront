import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LoginService } from '../services/login.service';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-produtocreate',
  templateUrl: './produtocreate.page.html',
  styleUrls: ['./produtocreate.page.scss'],
})
export class ProdutocreatePage implements OnInit {
  ab: any = false;
  nome:any;
  primeiro: any;
  data: Produto;
  resposta: any;
  pessoas:any = []; 
  constructor(
    public router: Router,
    private menu: MenuController,
    public loginService: LoginService,
  ) {
    this.data = new Produto();
   }


  ngOnInit() {
    this.tipo();
  }
  a(){
    if(this.ab == false){
      this.ab = true;
    }else{
      this.ab = false;
    }
  }
  tipo(){
    this.loginService.gettipo().subscribe((response=>{  
      this.pessoas = response;

    }))
  }
 
  sair(){
    this.router.navigate(['login']);
  }

  submitForm() {
    this.loginService.postproduto(this.data).subscribe((response=>{
      this.router.navigate(['produto']);
    }))
   }

}
