import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patrimonio',
  templateUrl: './patrimonio.page.html',
  styleUrls: ['./patrimonio.page.scss'],
})
export class PatrimonioPage implements OnInit {
patrimonio: any[] = [];
  constructor(private route:Router, private service:ApiService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.patrimonio = [];
    this.carregar(); 
   }
  addPatrimonio(){
    this.route.navigate(['add-patrimonio']);
    //console.log('vamos add?.....');
  }
  carregar(){
    return new Promise( ret => {
      let dados = {
        requisicao: "listar",
        numero:""
      };
      this.service.conectApi(dados, 'patrimonio.php').subscribe(data =>{
        if(data['result'] == '0'){
          this.ionViewWillEnter();
        }
        else{
          for(let item of data['result']){
            this.patrimonio.push(item);
            
          }
        }
      });
    });
  }// final do método carregar()


}
