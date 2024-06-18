import { Component } from '@angular/core';
import { IpService } from '../../services/ip.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ip',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ip.component.html',
  styleUrl: './ip.component.css'
})
export class IpComponent {

  texto:string="";

  direccion:any = [];

  pais:any = [];

  constructor(private ipService: IpService){
  }

  buscarIp(){
    this.ipService.solicitarIp(this.texto).subscribe(
      (result:any) => {
        console.log(result);
        console.log(typeof result);
        this.direccion = result;
        this.pais = result.timezone;
      },
      (error:any) => {
        console.log(error);
      }
    )
  }

}
