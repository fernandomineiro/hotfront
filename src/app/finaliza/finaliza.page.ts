import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LoginService } from '../services/login.service';
import { Carro } from '../models/carro';
@Component({
  selector: 'app-finaliza',
  templateUrl: './finaliza.page.html',
  styleUrls: ['./finaliza.page.scss'],
})
export class FinalizaPage implements OnInit {
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
  ) { }

  ngOnInit() {
    this.carro;
  }
  ionViewWillEnter() {
    // Used ionViewWillEnter as ngOnInit is not 
    // called due to view persistence in Ionic
    this.carro();
  } 
  carro(){
    this.loginService.getcarro().subscribe((response=>{
      this.pessoas = response;
      console.log(response);
    }))
  }

  sair(){
    this.router.navigate(['login']);
  }
}
