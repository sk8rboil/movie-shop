import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any=[];
  public movieList = new BehaviorSubject<any>([]);

  constructor() { }

  getMovie(){
    return this.movieList.asObservable();
  }

  setMovie(movie: any){
    this.cartItemList.push(...movie);
    this.movieList.next(movie);
  }

  addtoCart(movie:any){
    this.cartItemList.push(movie);
    this.movieList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }

  getTotalPrice(){
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
  }

  removeCartItem(movie: any){
    this.cartItemList.map((a:any,index: any)=>{
      if (movie.id === a.id) {
        this.cartItemList.splice(index,1);
      }
    })
  }

  removeAllCart(){
    this.cartItemList = [];
    this.movieList.next(this.cartItemList);
  }


}
