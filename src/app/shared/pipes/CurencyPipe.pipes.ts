import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:'curencyPipe',
  standalone: true,

})

export class CurencyPipePipe implements PipeTransform {

  transform(value: number){
    return Intl.NumberFormat('vi-VN', {style:'currency', currency:'VND'}).format(value);
  }
}

