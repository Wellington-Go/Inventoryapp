import { ApiService } from './../../services/api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string="";
  senha: string = "";
    constructor(
      private router: Router, 
      private sevice: ApiService, 
      private toastCtrl: ToastController
      ) { }
  
    ngOnInit() {
    }
    login(){
      let dados = {
        requisicao: 'login',
        usuario: this.usuario,
        senha: this.senha
      }
      //dados é o que está sendo passado para a api
      // data é o que está sendo retornado pela api
      this.sevice.conectApi(dados, 'api.php').subscribe( async data =>{
        //debugger;
        if(data['success']){
          if(data['result']['nivel']=='admin' || data['result']['nivel']=='professor')
          //console.log(data['result']);
          this.router.navigate(['usuarios']);
        else
          this.router.navigate(['folder']);
          const toast = await this.toastCtrl.create({
            message:"Login efetuado com sucesso",
            position:"top",
            color:"success",
            duration:2500
          });
          toast.present();
        }else{
          const toast = await this.toastCtrl.create({
            message:data['msg'],
            position:"bottom",
            color:"danger",
            duration:2500
          });
          toast.present();
        }
      
      });
}
mostrar(){
  this.router.navigate(['usuarios']);
}// final do método mostrar
}
