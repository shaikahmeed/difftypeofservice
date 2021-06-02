import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class CountriesService{
    //inject the HTTP client
    constructor(private _http:HttpClient){}

    public getCountries():Observable<any>{
        return this._http.get('http://restcountries.eu/rest/v2/all');
    }
}


