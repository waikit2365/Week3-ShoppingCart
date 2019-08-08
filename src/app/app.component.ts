import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products = [
    {
      id: "samsung",
      price: 1000,
      description: "Samsung Phone", 
      image: "./product_samsung.jpg"
    },
    {
      id: "xiaomi",
      price: 2000,
      description: "Xiaomi Phone", 
      image: "./product_xiaomi.jpg"
    },
    {
      id: "apple",
      price: 3000,
      description: "Apple Phone", 
      image: "./product_apple.jpg"
    },
  ]

  showProduct (){
    for(let i:number = 0; i < this.products.length; i++){
      document.getElementById("image").innerHTML = this.products[i].image;
      document.getElementById("id").innerHTML = "ID: " + this.products[i].id;
      document.getElementById("price").innerHTML = "Price: " + this.products[i].price;
      document.getElementById("description").innerHTML = "Description: " + this.products[i].description;
    }
  }
}