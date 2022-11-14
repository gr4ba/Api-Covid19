import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  public paises: any = []

  constructor( private paisesService: PaisesService) {} 

  ngOnInit(){
    this.paisesService.cargarPaises()
    .subscribe(resp => {

      console.log(resp);
      this.paises = resp.Countries;
    });
  }

}
