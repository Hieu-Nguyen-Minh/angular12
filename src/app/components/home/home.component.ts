import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = 'hieu nguyen'; // đẩy data từ component ra HTML hay còn gọi là databinding value 1 chiều
  // đẩy data từ component ra thẻ HTML thông qua thuộc tính của thẻ
  public age = 16;

  public traicay = [
    { name: 'TÁO', price: 99, hagia: true },
    { name: 'Nho', price: 99, hagia: false },
    { name: 'LÊ', price: 45 },
    { name: 'Chuối', price: -6, hagia: true },
  ];
  constructor() {}

  ngOnInit(): void {}

  resetName() {
    this.name = '';
  }
}
