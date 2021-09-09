import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  // public formData: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   age: new FormControl(''),
  // });

  public formData = this.fb.group({
    name: ['', Validators.required],
    age: ['', Validators.required],
    aliases: this.fb.array([this.fb.control('', Validators.required)]),
  });

  get aliases() {
    return this.formData.get('aliases') as FormArray;
  }

  constructor(private commonService: CommonService, private fb: FormBuilder) {}

  ngOnInit(): void {}
  onSubmit() {
    this.commonService.submitData(this.formData.value);
  }
  addAlias() {
    this.aliases.push(this.fb.control('', Validators.required));
  }
}
