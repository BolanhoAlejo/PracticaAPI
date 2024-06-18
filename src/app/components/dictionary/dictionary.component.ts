import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DictionaryService } from '../../services/dictionary.service';

@Component({
  selector: 'app-dictionary',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './dictionary.component.html',
  styleUrl: './dictionary.component.css'
})
export class DictionaryComponent {

palabra !: string;
definicion:any = [];

constructor(public dictionaryService: DictionaryService){}

buscarPalabra(palabra: string): void {
  this.palabra = palabra;
  this.dictionaryService.getSignificado(palabra).subscribe(
    (data) => {
      console.log(data);
      console.log(palabra);
      this.definicion = data.list[0];
      console.log(this.definicion);
    },
    (error) => {
      console.log(error);
    }
  )
}

}
