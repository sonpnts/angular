import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from "./shared/header-layout/header-layout.component";
import {FormsModule} from '@angular/forms';
import {CurencyPipePipe} from './shared/pipes/CurencyPipe.pipes';
import {UpperCasePipe} from './shared/pipes/UpperCasePipe.pipes';
import {NgClass, NgFor, NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  contentButton="CLick me!";
  clickMessage="";
  handleClickMe(): void
  {
      this.clickMessage="Click me Hello world!";
  }
  updateField() : void{
    console.log("Hello World!");
  }
  bindingMessage="";

  isVisible = false;

}
