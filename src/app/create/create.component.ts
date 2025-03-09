import {Component, OnInit} from '@angular/core';

import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {CurencyPipePipe} from '../shared/pipes/CurencyPipe.pipes';
import {UpperCasePipe} from '../shared/pipes/UpperCasePipe.pipes';
import {NgClass, NgFor, NgIf} from '@angular/common';
import {ProductItemComponent} from '../shared/product-item/product-item.component';
import {BlogItem, ProductItems} from '../shared/types/productItem';
import {serviceBlog} from '../../services/serviceBlog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css', '../app.component.css'],
})
export class CreateComponent {
  product = new FormGroup({
    name : new FormControl('',Validators.required),
    price : new FormControl('',Validators.required),

  })

  get name() {
    return this.product.get('name');
  }
  get price() {
    return this.product.get('price');
  }

  constructor( private blogSevice :serviceBlog, private router: Router) {

  }

  handleAddToCard(){
    if (this.product.invalid) {
      return;
    }
    const blogItem: BlogItem ={
      id : Math.random(),
      title : String(this.name?.value),
      body: String(this.price?.value),
      author:"sonpnts"

    }
    this.blogSevice.postBlog(blogItem).subscribe(({data}:any)=>{
      if(data.id){
      this.router.navigate(['/']);
      }
    })



  }


}
