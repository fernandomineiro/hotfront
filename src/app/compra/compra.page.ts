import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-compra',
  templateUrl: './compra.page.html',
  styleUrls: ['./compra.page.scss'],
})
export class CompraPage implements OnInit {
  ab: any = false;
  nome:any; 
  primeiro: any;
  valor: any = 0;
  pessoas:any = [];
  quantidade: any = 0;
  itens:any = [];
  x:any = [];
  
  constructor(
    public router: Router,
    private menu: MenuController,
    public loginService: LoginService,
  ) { 
    
  }
 
  ngOnInit() {
    //localStorage.setItem('x', JSON.stringify(this.x));
    localStorage.setItem('valor', this.valor);
    localStorage.setItem('quantidade', this.quantidade);
   // localStorage.setItem("x", JSON.stringify(this.x));
    this.nome = localStorage.getItem("usuarioadmin");
    this.primeiro = (this.nome.substring(0,1));
    this.tipo();
    this.valor = localStorage.getItem("valor");
    this.quantidade = localStorage.getItem("quantidade");
   // this.itens = JSON.parse(sessionStorage.getItem('itens'));
    console.log(this.itens);
    localStorage.setItem('x', JSON.stringify(this.x));
  
  }
  
  a(){
    if(this.ab == false){
      this.ab = true;
    }else{
      this.ab = false;
    }
  }

  sair(){
    this.router.navigate(['home']);
  } 

  tipo(){
    this.loginService.gettipo().subscribe((response=>{  
      this.pessoas = response;
      console.log(response);
    }))
  }

  
 
  

}
