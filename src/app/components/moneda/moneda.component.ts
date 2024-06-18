import { Component } from '@angular/core';
import { MonedaService } from '../../services/moneda.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-moneda',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './moneda.component.html',
  styleUrl: './moneda.component.css'
})
export class MonedaComponent {

fvalue: string = "";
ftype: string = "";
ttype: string = "";

resultados:any = [];

constructor(public monedaService: MonedaService){}

ObtenerCambio(){
  this.monedaService.getMoneda(this.fvalue, this.ftype, this.ttype).subscribe(
    (result: any) => {
      console.log(result);
      this.resultados = result;
    },
    (error: any) => {
      console.log(error);
    }
  )
}
}
