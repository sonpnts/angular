import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ProductItems} from '../shared/types/productItem';
import {ProductItemComponent} from '../shared/product-item/product-item.component';
import {HttpClient} from '@angular/common/http';
import {serviceBlog} from '../../services/serviceBlog';
import {Subscription, map} from 'rxjs';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductItemComponent, NgIf],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  contentButton = "CLick me!";
  clickMessage = "";

  handleDelete = (event: number) => {
    this.blogService.deleteBlog(event).subscribe(({data}: any) => {
      if (data == 1) {
        this.products = this.products.filter(item => item.id !== event);
      }
    })
  }

  updateField(): void {
    console.log("Hello World!");
  }

  getBlogApi: Subscription;

  constructor(private blogService: serviceBlog) {
    console.log("Init constructor")
    this.getBlogApi = new Subscription();
  }

  ngOnInit(): void {
    this.getBlogApi = this.blogService.getBlogs().pipe(
      map(({data}) => data.map((item: any) => {
          return {
            ...item,
            name: item.title,
            price: Number(item.body),
            image: "assets/images/shose.png"
          };
        })
      )).subscribe((res) => {
      this.products = res;
    });
  }

  ngOnDestroy(): void {
    if (this.getBlogApi) {
      this.getBlogApi.unsubscribe();
      // console.log("Unsubcribe successfully");
    }
  }

  isVisible = false;
  products: ProductItems[] = [
    {id: 1, name: "samba org", price: 40000, image: "assets/images/shose.png"},
    {id: 2, name: "dawin", price: 60000, image: "assets/images/shose.png"},
    {id: 3, name: "second sunday", price: 30000, image: "assets/images/shose.png"},
    {id: 4, name: "booth", price: 40000, image: "assets/images/shose.png"},
    {id: 5, name: "nike", price: 40000, image: "assets/images/shose.png"},
  ]
}
