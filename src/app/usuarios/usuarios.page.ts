import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  usuarios: any [] = [];

  constructor(private service: ApiService) { }

ngOnInit() {
    /*this.actRoute.params.subscribe((dadosdarota:any)=>{
      this.id = dadosdarota.id;
      this.nome = dadosdarota.nome;
      this.usuario = dadosdarota.usuario;
      this.nivel = dadosdarota.nivel;
    });*/
}
ionViewWillEnter(){
    // garante que a nossa tela sempre exiba os dados atualizados
  this.usuarios = [];
  this.carregar();
}
carregar(){
  return new Promise( ret => {
    let dados = {
      requisicao:"SP",
      usuarios:""
    };
    this.service.conectApi(dados, 'patrimonio.php').subscribe(data =>{
      if(data['result'] == '0'){
        this.ionViewWillEnter();
      }
      else{
        for(let lista of data['result']){
          this.usuarios.push(lista);
        }
      }
    });
  });
}// final do método carregar()
}
