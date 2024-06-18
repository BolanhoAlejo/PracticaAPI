import { Component } from '@angular/core';
import { GoogleService } from '../../services/google.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-google',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './google.component.html',
  styleUrl: './google.component.css'
})
export class GoogleComponent {

busqueda !: string;
resultado : any = [];

  constructor(public googleService: GoogleService){}

  ObtenerResultados(busqueda: string): void{
    this.busqueda = busqueda;
    this.googleService.getBusqueda(busqueda).subscribe(
      (result:any) => {
        console.log(result);
        this.resultado = result.results;
      },
      (error:any) => {
        console.log(error);
      }
    )
  }

}
