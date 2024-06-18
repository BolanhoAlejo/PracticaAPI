import { Component } from '@angular/core';
import { WhatsappService } from '../../services/whatsapp.service';
import { subscribeOn } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './whatsapp.component.html',
  styleUrl: './whatsapp.component.css'
})
export class WhatsappComponent {

  numero:string="";
  validacion:any;

constructor(public whatsappService: WhatsappService) {}

ObtenerNumero(){
  this.whatsappService.getValidacion(this.numero).subscribe(
    (result:any) => {
      console.log(result);
      this.validacion = result;
      console.log(this.validacion);
    },
    (error:any) => {
      console.log(error);
    }
  )
}
}
