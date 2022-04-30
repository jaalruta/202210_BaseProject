import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

  cafes:Array<Coffee> =[];
  cantidadCafeOrigen:number = 0;
  cantidadCafeBlend:number = 0;

  constructor(private coffeeService:CoffeeService) { }
  getCoffees(): void{
    this.coffeeService.getCoffees().subscribe((cafes)=> {
      this.cafes= cafes;
      console.log(cafes);
      for(var i in cafes)
      {
        (cafes[i].tipo=="Blend")?this.cantidadCafeBlend+=1:0;
        (cafes[i].tipo=="Café de Origen")?this.cantidadCafeOrigen+=1:0;

      }
    })

  }

  ngOnInit() {
    this.getCoffees();
  }
}
