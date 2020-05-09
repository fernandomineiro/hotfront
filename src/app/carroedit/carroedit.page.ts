import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LoginService } from '../services/login.service';
import { Carro } from '../models/carro';


@Component({
  selector: 'app-carroedit',
  templateUrl: './carroedit.page.html',
  styleUrls: ['./carroedit.page.scss'],
})
export class CarroeditPage implements OnInit {
  id: number;
  ab: any = false;
  nome:any;
  primeiro: any;
  data: Carro;
  resposta: any;
  pessoas:any = [];
  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private menu: MenuController,
    public loginService: LoginService,
  ) {
    this.data = new Carro();
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

  pegada(){
    this.loginService.pegarcarro(this.id).subscribe((response=>{
      this.data.nome=response[0][0]['nome'];
      this.data.endereco=response[0][0]['endereco'];
      this.data.numero=response[0][0]['numero'];
      this.data.cidade=response[0][0]['cidade'];
      this.data.informacao=response[0][0]['informacao'];
    }))
  }

  update(){
    this.loginService.updatecarro(this.id, this.data).subscribe(response => {
      this.router.navigate(['carro']);
    })
  }
 
}
