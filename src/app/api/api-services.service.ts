import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, delay, from, map, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { Breed, BreedList } from '../shared/interfaces/breeds.interface';
@Injectable({
    providedIn: 'root'
  })
  export class ApiServicesService {
    
  constructor(
    private http: HttpClient,
  ) { }

    getApiEndpoint() {
      return environment.apiEndpoint;
    }

    getBreeds(): Observable<BreedList> {
      return this.http.get(`${this.getApiEndpoint()}breeds/list/all`,
        {
          observe: 'response',
          reportProgress: true,
        })
        .pipe(map(res => res.body as BreedList))
    }

    getBreedImage(breed, subBreed?):Observable<Breed> {
      let urlString = subBreed ? 
        `${this.getApiEndpoint()}breed/${breed}/${subBreed}/images/random` :
        `${this.getApiEndpoint()}breed/${breed}/images/random`;

      return this.http.get(urlString,
        {
          observe: 'response',
          reportProgress: true,
        })
        .pipe(map(res => res.body as Breed))
    }

  }