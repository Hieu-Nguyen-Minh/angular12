import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = 'hieu nguyen'; // đẩy data từ component ra HTML hay còn gọi là databinding value 1 chiều

  constructor() {}

  ngOnInit(): void {}
}
