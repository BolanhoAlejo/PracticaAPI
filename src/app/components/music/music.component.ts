import { Component } from '@angular/core';
import { MusicService } from '../../services/music.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent {

musica ! : any;
cancion:any = [];


constructor(private musicService: MusicService) {}

ObtenerMusica(musica: string): void {
  this.musica = musica;
  this.musicService.getMusic(this.musica).subscribe(
    (result:any) => {
    console.log(result);
    this.cancion = result.tracks.hits[0].track.share;
    console.log(this.cancion);
  },
   (error:any) => {
    console.log(error);
  });
}

}
