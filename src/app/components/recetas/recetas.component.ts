import { Component } from '@angular/core';
import { RecetasService } from '../../services/recetas.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recetas',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './recetas.component.html',
  styleUrl: './recetas.component.css'
})
export class RecetasComponent {

  parametros !: string;
  recetas: any = [];

  constructor(public recetasService: RecetasService){}

  ObtenerRecetas(parametros: string): void {
    this.parametros = parametros;
    this.recetasService.getRecetas(parametros).subscribe(
      (result:any) => {
        console.log(result);
        this.recetas = result.results;
        console.log(this.recetas);
      },
      (error:any) => {
        console.log(error);
      });
  }

}
