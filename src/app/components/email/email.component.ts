import { Component } from '@angular/core';
import { EmailService } from '../../services/email.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './email.component.html',
  styleUrl: './email.component.css'
})
export class EmailComponent {

  email: string = "";

  resultados:any = [];

  constructor(public emailService: EmailService){}

 ObtenerEmail(){
    this.emailService.getValidaciones(this.email).subscribe(
      (data:any) => {
        console.log(data);
        this.resultados = data;
      },
      (error:any) => {
        console.log(error);
      }
    )
  }


}
