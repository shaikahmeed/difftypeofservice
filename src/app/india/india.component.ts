import { Component, OnInit } from '@angular/core';
import { PopulationService } from '../population.service';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit {

  population:number = 1.32;
  constructor(private _serv:PopulationService) {
    this._serv.indiaPopulation = this.population;
   }

  ngOnInit(): void {
  }

}
