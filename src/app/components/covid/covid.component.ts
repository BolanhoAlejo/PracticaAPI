import { Component } from '@angular/core';
import { CovidService } from '../../services/covid.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-covid',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './covid.component.html',
  styleUrl: './covid.component.css'
})
export class CovidComponent {

pais !: string;
datos: any = [];

constructor(public covidService: CovidService) {}

ObtenerDatos(pais: string): void {
  this.pais = pais;
  this.covidService.getCasos(pais).subscribe(
    (result:any) => {
      console.log(result);
      this.datos = result.response[0];
      console.log(this.datos);
},
    (error:any) => {
      console.log(error);
    }
  )
}


}
