import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IStudent } from 'src/app/models/Strudent';
import { CommonService } from 'src/app/services/common.service';
import { HttpServerService } from 'src/app/services/http-server.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnInit {
  id: Number = 0;
  studentForm = this.fb.group({
    code: ['', Validators.required],
    gender: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    dob: ['', Validators.required],
    email: [''],
    phone: [''],
    img: [''],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpServerService,
    private common: CommonService
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id > 0) {
      this.loadData(this.id);
    }
  }

  private loadData(id) {
    this.http.getStudent(id).subscribe((data) => {
      for (let scontrols in this.studentForm.controls) {
        if (scontrols) {
          this.studentForm.controls[scontrols].setValue(data[scontrols]);
        }
      }
    });
  }

  createNewData() {
    const newStudent = {};
    for (let scontrols in this.studentForm.controls) {
      if (scontrols) {
        newStudent[scontrols] = this.studentForm.controls[scontrols].value;
      }
    }
    return newStudent as IStudent;
  }

  saveAndGotoList() {
    if (this.id > 0) {
      this.http
        .updateStudent(this.id, this.createNewData())
        .subscribe((data) => {
          console.log(data);
          this.router.navigate(['students']);
        });
    } else {
      this.http.addStudents(this.createNewData()).subscribe((data) => {
        console.log(data);
        this.router.navigate(['students']);
      });
    }
  }

  saveAndAddNew() {
    if (this.id > 0) {
      this.http
        .updateStudent(this.id, this.createNewData())
        .subscribe((data) => {
          console.log(data);
          this.id = 0;
          this.studentForm.reset();
        });
    } else {
      this.http.addStudents(this.createNewData()).subscribe(() => {
        this.common.increamentTotalStudents();
        this.studentForm.reset();
      });
    }
  }

  public addRandom() {
    this.http.getRandomStudent().subscribe((data) => {
      console.log(data);
      const student = data['results'][0];
      if (data && data['results'] && data['results'].length > 0) {
        this.studentForm.controls.code.setValue(
          `${student.id.name || ''} - ${student.id.value || ''}`
        );
        this.studentForm.controls.gender.setValue(student.gender);
        this.studentForm.controls.firstName.setValue(student.name.first);
        this.studentForm.controls.lastName.setValue(student.name.last);
        this.studentForm.controls.dob.setValue(student.dob.date);
        this.studentForm.controls.email.setValue(student.email);
        this.studentForm.controls.phone.setValue(student.phone);
        this.studentForm.controls.img.setValue(student.picture.large);
      }
    });
  }
}
