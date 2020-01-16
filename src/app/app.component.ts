import { Component, OnInit, Input, EventEmitter, OnDestroy, HostListener } from '@angular/core';
import { ProductService } from './services/product.service';
import { HttpClient } from '@angular/common/http';
import {OrderrByPipe} from './services/sort.pipe';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'epsilon';
  productlist:any;
  isDesc: boolean = false;
  column: string = 'name';
  direction: number;
  constructor(private prod:ProductService,private http:HttpClient){}
  ngOnInit(): void {
    this.getproductlist();
    
  }
  getproductlist(){
    this.prod.getproduct().subscribe((data)=>{
      this.productlist=data;
      console.log(this.productlist);
    })
  }
  sort(property){
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
  };
}
