import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterOutlet} from '@angular/router';
import { HeaderLayoutComponent } from "../shared/header-layout/header-layout.component";
import {FormsModule} from '@angular/forms';
import {CurencyPipePipe} from '../shared/pipes/CurencyPipe.pipes';
import {UpperCasePipe} from '../shared/pipes/UpperCasePipe.pipes';
import {NgClass, NgFor, NgIf} from '@angular/common';
import {ProductItemComponent} from '../shared/product-item/product-item.component';
import {ProductItems} from '../shared/types/productItem';
import {serviceBlog} from '../../services/serviceBlog';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CurencyPipePipe],
  templateUrl: './detail.component.html',
  standalone: true,
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {
  id ='';

  productItem: ProductItems={
    name:"",
    id:0,
    price:0,
    image:"",
  }
  constructor(private route: ActivatedRoute, private blogSevice :serviceBlog) {
    this.id=String(route.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    this.blogSevice.detailBlog(+this.id).subscribe(({data}: any) => {
      this.productItem.id = data.id;
      this.productItem.name = data.title;
      this.productItem.price = data.body;
      this.productItem.image = 'assets/images/shose.png';
    });
  }
}
