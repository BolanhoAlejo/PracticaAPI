import { Component } from '@angular/core';
import { TranslateService } from '../../services/translate.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-translate',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './translate.component.html',
  styleUrl: './translate.component.css'
})
export class TranslateComponent {

texto:string="";
source:string="";
target:string="";
textoTraducido:string="";

constructor(private translateService: TranslateService){
}

obtenerLenguajes(): void {
  this.translateService.getLenguajes().subscribe(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.log(error);
    }
  )
}

traducirTexto(){
  this.translateService.translateText(this.texto, this.source, this.target).subscribe(
    (result:any) => {
      console.log(result);
      this.textoTraducido = result.data.translations[0].translatedText;
    },
    (error:any) => {
      console.log(error);
    }
  )
}

}
