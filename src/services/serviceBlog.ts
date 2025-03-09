import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {responseData} from '../app/shared/types/responseData';
import {BlogItem,ProductItems} from '../app/shared/types/productItem';


@Injectable({providedIn: 'root'})
export class serviceBlog {

  constructor(private http: HttpClient) {

  }

  getBlogs(): Observable<responseData<ProductItems[]>> {
    return this.http.get<any>('https://ninedev-api.vercel.app/blogs')
  }
  detailBlog(id: number):  Observable<responseData<ProductItems>>{
    return this.http.get<any>(`https://ninedev-api.vercel.app/blogs/${id}`)

  }
  postBlog(blogItem: BlogItem):  Observable<responseData<ProductItems>>{
    return this.http.post<any>(`https://ninedev-api.vercel.app/blogs`, blogItem)

  }

  deleteBlog(id: number):  Observable<responseData<ProductItems>>{
    return this.http.delete<any>(`https://ninedev-api.vercel.app/blogs/${id}`)

  }


}
