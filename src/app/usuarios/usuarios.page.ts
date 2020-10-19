import { ApiService } from './../../services/api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  produto: string="";
  limite: number=10;
  inicial: number=0;
  usuarios:any = [];

  constructor(private route: Router , private service: ApiService) { }

  ngOnInit() {
    /*let user ={
      id:"1",
      produto:"som",
      numero:"1234",
      marca:"sony",
      serie:"1F5G6H",
      categoria:"som",
      valor:"1234.00",
      situacao:"estavel"
    };
    this.usuarios.push(user);*/
  }
  ionViewWillEnter(){
    
    this.usuarios = [];
    this.inicial = 0;
    this.carregar(); 
   }

  carregar(){
    return new Promise( ret => {
      this.usuarios = [];
      let dados = {
        requisicao: "listar",
        produto: this.produto,
        limit: this.limite,
        start: this.inicial
      };
      this.service.conectApi(dados, 'patrimonio.php').subscribe(data =>{
        if(data['result'] == '0'){
          this.ionViewWillEnter();
        }
        else{
          for(let patrimonio of data['result']){
            this.usuarios.push(patrimonio);
            
          }
        }
        ret(true);
      });
    });
  }// final do método carregar()
  mostrar(id, numero,produto,marca,serie,categoria,valor,situacao ){
    this.route.navigate(['mostrar-usuario/'+id+'/'+numero+'/'+produto+'/'+marca+'/'+serie+'/'+categoria+'/'+valor+'/'+situacao]);
  }// final do método mostrar

}
