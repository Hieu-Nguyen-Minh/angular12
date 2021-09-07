import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public showColor = 'green';
  public login = 'user';

  constructor() {}

  ngOnInit(): void {}
  changeLoginAdmin() {
    this.login = 'admin';
  }

  changeLoginUser() {
    this.login = 'user';
  }
}
