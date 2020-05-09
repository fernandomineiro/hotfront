import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
  
@Component({
  selector: 'app-admina',
  templateUrl: './admina.page.html',
  styleUrls: ['./admina.page.scss'],
})
export class AdminaPage implements OnInit {
  ab: any = false;
  nome:any;
  primeiro: any;
  constructor(
    public router: Router,
    private menu: MenuController
  ) { }

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

}
