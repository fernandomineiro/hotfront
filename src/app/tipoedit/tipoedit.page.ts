import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LoginService } from '../services/login.service';
import { Tipo } from '../models/tipo';

@Component({
  selector: 'app-tipoedit',
  templateUrl: './tipoedit.page.html',
  styleUrls: ['./tipoedit.page.scss'],
})
export class TipoeditPage implements OnInit {
  id: number;
  ab: any = false;
  nome:any;
  primeiro: any;
  data: Tipo;
  resposta: any;
  pessoas:any = [];
  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private menu: MenuController,
    public loginService: LoginService,
  ) { 
    this.data = new Tipo();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
   
    this.pegada();

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

  update(){
    this.loginService.updatetipo(this.id, this.data).subscribe(response => {
      this.router.navigate(['tipo']);
    })
  }
   
  pegada(){
    this.loginService.pegartipo(this.id).subscribe((response=>{
      this.data.tipo=response[0][0]['tipo'];
    }))
  }
  sair(){
    this.router.navigate(['login']);
  }
 
}
