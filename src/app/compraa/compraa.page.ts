import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { LoginService } from '../services/login.service';
import { Tipo } from '../models/tipo';


@Component({
  selector: 'app-compraa',
  templateUrl: './compraa.page.html',
  styleUrls: ['./compraa.page.scss'],
})
export class CompraaPage implements OnInit {
  id: any;
  ab: any = false;
  nome:any;
  primeiro: any;
  data: Tipo;
  resposta: any;
  pessoas:any = [];
  valor: any;
  produto:any = [];
  itens:any = [];
  soma:any;
  pa:any = [];
  result:any;
  quant:any;
  x:any= [];
  z:any= [];
  q:any;
  
  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private menu: MenuController,
    public loginService: LoginService,
  ) { 
    
    
    
    
  }

  ngOnInit() {
    
    this.id = this.activatedRoute.snapshot.params["id"];
    console.log(this.id);
    this.tipo();
    this.loginService.pegaproduto(this.id).subscribe((subscribe)=>{
      this.produto = subscribe[0];
      console.log(subscribe);
    })
    this.x = JSON.parse(localStorage.getItem('x'))
   
    
    this.valor = localStorage.getItem("valor");
    this.quant = localStorage.getItem("quantidade");
    this.itens = this.itens;
    console.log(this.itens);
    
    
    console.log(this.x);
  } 
  sair(){
    this.router.navigate(['compra']);
  } 

  turim(){
   
   
  }

  finaliza(){
    this.router.navigate(['finaliza']);
  }

  tipo(){
    this.loginService.gettipo().subscribe((response=>{  
      this.pessoas = response;
      console.log(response);
    }))
  }
 
  a(){
    if(this.ab == false){
      this.ab = true;
    }else{
      this.ab = false;
    }
  }

  delete(item){
    this.x = JSON.parse(localStorage.getItem('x'))
    for (let i = 0; i < this.x.length; i++) {
      if(this.x[i]['nome'] == item.nome){
        this.x.splice(this.x.indexOf(item.nome), 1);
        localStorage.setItem('x', JSON.stringify(this.x));
console.log(this.x);
        break;
      }else{
        console.log('não encontrado')
      }
      
    }
    
    
  }

  add(item){
    console.log(item.nome);
    console.log(item.valor);
    this.quant = localStorage.getItem("quantidade");
    this.quant = parseFloat(this.quant) + 1
    if(this.quant == 0){
      this.quant = 1;
    }
    
    this.soma = localStorage.getItem("valor");
    item.valor = item.valor.replace(',', '.');
    this.soma = this.soma.replace(',', '.');
    this.result = parseFloat(item.valor) + parseFloat(this.soma)
    this.result = this.result.toLocaleString('pt-BR', { minimumFractionDigits: 2});
   localStorage.setItem('valor', this.result);
   localStorage.setItem('quantidade', this.quant);
   
    this.pa['nome'] = item.nome;
    this.pa['valor'] = item.valor;
    this.x.push({nome: item.nome, valor: item.valor});
    
    console.log(this.x);
    console.log('oi');
  
    localStorage.setItem('x', JSON.stringify(this.x));
    this.z = JSON.parse(localStorage.getItem('x'))
    console.log(this.z)
   // this.ionViewWillEnter();
   this.ngOnInit();
   
   //this.ngOnInit();
  } 

 // ionViewWillEnter() {
  //  this.ngOnInit();
    
 // }



}
