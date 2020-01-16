import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getproduct(){
    return this.http.get('http://usweb.dotomi.com/resources/swfs/cookies.json');
  }
}
