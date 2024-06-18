import { Component } from '@angular/core';
import { QrService } from '../../services/qr.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-qr',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './qr.component.html',
  styleUrl: './qr.component.css'
})
export class QrComponent {

contenido:string="";
wdata:string="";
hdata:string="";
fgcolor:string="";
bgcolor:string="";

constructor(public qrService: QrService){}

ObtenerCodigoQr() {
  this.qrService.getQr(this.contenido, this.wdata, this.hdata, this.fgcolor, this.bgcolor).subscribe(
    (result: any) => {
      console.log(result);
    },
    (error: any) => {
      console.log(error);
    }
  )
}
}