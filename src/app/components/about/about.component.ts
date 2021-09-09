import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  public showColor = 'green';
  public login = 'user';

  public counter = 0;
  public counterBp = 0;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.counter = this.commonService.getCounter();
    this.counterBp = this.commonService.binhPhuong(this.counter);
    this.commonService.setCounter(1);
    // console.log(this.counter);
  }
  changeLoginAdmin() {
    this.login = 'admin';
  }

  changeLoginUser() {
    this.login = 'user';
  }
}
