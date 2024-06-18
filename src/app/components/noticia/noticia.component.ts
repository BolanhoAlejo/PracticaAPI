import { Component } from '@angular/core';
import { NoticiaService } from '../../services/noticia.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-noticia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.css'
})
export class NoticiaComponent {

  noticias:Array<any> = [];

  constructor(private noticiaService: NoticiaService){
  }

  ObtenerNoticias(): void{
    this.noticiaService.getNoticias().subscribe(
      data=>{
        console.log(data);
        this.noticias = data.homepageArticles[0].articles;
        console.log(this.noticias);
      },
      error=>{
        console.log(error);
      }
    )
  }

}
