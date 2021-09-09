import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
})
export class TemplateDrivenFormComponent implements OnInit {
  public user = {
    name: '',
    age: 0,
  };
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {}

  submit() {
    console.log('name: ', this.user.name);
    this.commonService.submitData(this.user);
  }
}
