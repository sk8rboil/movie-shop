import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit{
  
  public movieList : any;
  constructor(private api: ApiService,private cartService: CartService){ }
  ngOnInit(): void {
    this.api.getMovie().subscribe(res=>{
      this.movieList = res; //keep Object
      console.log(res);

      this.movieList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }

  addtocart(items: any){
    this.cartService.addtoCart(items);
  }
}
