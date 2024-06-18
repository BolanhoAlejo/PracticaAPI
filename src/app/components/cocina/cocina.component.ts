import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CocinaService } from '../../services/cocina.service';

@Component({
  selector: 'app-cocina',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cocina.component.html',
  styleUrl: './cocina.component.css'
})
export class CocinaComponent {

  recetas:any = [];
  pasos:any = [];
  ingredientes:any = [];
procedimiento:any = [];

  constructor(public cocinaService: CocinaService){}

  ObtenerRecetas(): void {
    this.cocinaService.getRecetas().subscribe(
      (result:any) => {
        console.log(result);
        this.recetas = result;
        this.pasos = this.recetas;
      }
    )
  }

  ObtenerPasos(pasos: string): void{
    this.cocinaService.getPasos(pasos).subscribe(
      (result:any) => {
        console.log(result);
        this.ingredientes = result.Ingredientes;
        this.procedimiento = result;
        console.log(this.ingredientes);
        console.log(this.procedimiento);
      }
    )
  }

}
