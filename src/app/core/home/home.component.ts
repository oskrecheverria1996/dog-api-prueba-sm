import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: any = [];

  constructor() { }

  ngOnInit(): void {
    this.products = [
    ]
  }

  onPageChange(event) {

  }

}
