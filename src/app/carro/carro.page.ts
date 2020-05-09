import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LoginService } from '../services/login.service';
import { Carro } from '../models/carro';
@Component({
  selector: 'app-carro',
  templateUrl: './carro.page.html',
  styleUrls: ['./carro.page.scss'],
})
export class CarroPage implements OnInit {
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
    this.carro();
  }
 
  sair(){
    this.router.navigate(['login']);
  }

  carro(){
    this.loginService.getcarro().subscribe((response=>{
      this.pessoas = response;
      console.log(response);
    }))
  }

  delete(item) {
    //Delete item in Student data
    this.loginService.deletecarro(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.carro();
    });
  }

}
