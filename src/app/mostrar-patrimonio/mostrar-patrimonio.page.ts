import { ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-patrimonio',
  templateUrl: './mostrar-patrimonio.page.html',
  styleUrls: ['./mostrar-patrimonio.page.scss'],
})
export class MostrarPatrimonioPage implements OnInit {
id: string;
numero:string;
produto:string;
marca:string;
serie:string;
categoria:string;
situacao:string;



  constructor(private actRoute:ActivatedRoute) { }

  ngOnInit() {
    this.actRoute.params.subscribe( ( dadosdarota : any ) => {
      this.id  =  dadosdarota.id ;
      this.numero =  dadosdarota.numero ;
      this.produto  =  dadosdarota.produto ;
      this.marca  =  dadosdarota.marca ;
      this.serie  =  dadosdarota.serie ;
      this.categoria  =  dadosdarota.categoria ;
      this.situacao  =  dadosdarota.situacao ;
    });
  }

}
