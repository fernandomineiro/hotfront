import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LoginService } from '../services/login.service';
import { Produto } from '../models/produto';
@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {
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
    this.nome = localStorage.getItem("usuarioadmin");
    this.primeiro = (this.nome.substring(0,1));
    this.produto();
  }

  a(){
    if(this.ab == false){
      this.ab = true;
    }else{
      this.ab = false;
    }
  }
 
  ionViewWillEnter() {
    // Used ionViewWillEnter as ngOnInit is not 
    // called due to view persistence in Ionic
    this.produto();
  }
 
  produto(){
    this.loginService.getproduto().subscribe((response=>{  
      this.pessoas = response[0];
      console.log(response);
    }))
  }

  sair(){
    this.router.navigate(['login']);
  }

  
  delete(item) {
    //Delete item in Student data
    this.loginService.deleteproduto(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.produto();
    });
  }

} 
