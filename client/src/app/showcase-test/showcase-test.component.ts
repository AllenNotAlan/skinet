import { Component, OnInit } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Component({
  selector: 'app-showcase-test',
  templateUrl: './showcase-test.component.html',
  styleUrls: ['./showcase-test.component.scss']
})
export class ShowcaseTestComponent implements OnInit {

  products: any[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://localhost:44341/api/products?pageSize=50').subscribe((response: any) =>{
      this.products = response.data;
    }, error => {
      console.log(error);
    })
  }

}
