import { Component } from '@angular/core';
import { CarService } from '../../services/car.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {

marca! : String;
cars:Array<any> = [];
modelos:Array<any> = [];

constructor(private carService: CarService){
}

ObtenerModelos(): void {
  this.carService.getMakes().subscribe(
    (data) => {
      console.log(data);
      this.cars = data.data;
      console.log(this.cars);
    },
    (error) => {
      console.log(error);
    }
  )
}

ObtenerSubModelos(marca : string): void {
  this.marca = marca;
  this.carService.getModel(marca).subscribe(
    (data) => {
      this.limpiarModelos();
      console.log(data);
      this.modelos = data.data;
      console.log(this.modelos);
    },
    (error) => {
      console.log(error);
    }
  )
}
limpiarModelos(){
  this.modelos = [];
}
}
