import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LoginService } from '../services/login.service';
import { Tipo } from '../models/tipo';
@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.page.html',
  styleUrls: ['./tipo.page.scss'],
})
export class TipoPage implements OnInit {
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
    this.tipo();
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
    this.tipo();
  }

  tipo(){
    this.loginService.gettipo().subscribe((response=>{  
      this.pessoas = response;
    }))
  }

  sair(){
    this.router.navigate(['login']);
  }

  
  delete(item) {
    //Delete item in Student data
    this.loginService.deletetipo(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.tipo();
    });
  }

}
