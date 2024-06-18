import { Component } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-youtube',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './youtube.component.html',
  styleUrl: './youtube.component.css'
})
export class YoutubeComponent {

text: string = '';
videos: any = [];

constructor(public youtubeService: YoutubeService){}

ObtenerVideos(text: string): void {
  this.text = text;
  this.youtubeService.getVideos(text).subscribe(
    (result:any) => {
      console.log(result);
      this.videos = result.videos;
    },
    (error:any) => {
      console.log(error);
    });
}
}
