import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private cartService : CartService){ }

  public totalItem : number = 0;

  ngOnInit(): void {
    this.cartService.getMovie().subscribe(res=>{
      this.totalItem = res.length;
    })
  }

}
