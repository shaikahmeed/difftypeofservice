import { Component, OnInit } from '@angular/core';
import { CountriesService } from './countries.service';

@Component({
    selector: 'countries',
    templateUrl: './countries.component.html',
    styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
    
    public countries:any;
    constructor(private _serv:CountriesService) { }

    ngOnInit(): void {
        this._serv.getCountries().subscribe((posRes)=>{
            this.countries = posRes;
        }, (err)=> {
            console.log(err);
        });
     }
}
