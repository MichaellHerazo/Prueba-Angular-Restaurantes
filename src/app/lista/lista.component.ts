import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent {

  @Output() ciudadBusqueda = new EventEmitter<string>();
  ciudad: string = '';

  busquedaRestaurante(){
    this.ciudadBusqueda.emit(this.ciudad);
  }

  restaurantes:any[]=[];

  constructor(private apiService: ApiService){}

  onCiudadCargar(ciudad:string){
    this.ciudad = ciudad;
    this.cargarRestaurante();
  }

  cargarRestaurante(){
    this.apiService.getData(this.ciudad)
    .subscribe((data)=>{
      this.restaurantes = data.businesses;
    })
  }

}
