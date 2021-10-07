import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IStudent } from 'src/app/models/Strudent';
import { CommonService } from 'src/app/services/common.service';
import { HttpServerService } from 'src/app/services/http-server.service';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {
  students: IStudent[] = [];

  constructor(
    private common: CommonService,
    private http: HttpServerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  private getData() {
    this.http.getStudents().subscribe((data) => {
      this.students = data;
      console.log(this.students);

      this.common.setTotalStudent(data.length);
    });
  }

  public addSV() {
    this.router.navigate(['student-form', 0]);
  }

  public deleteStudent(studentId) {
    this.http.deleteStudent(studentId).subscribe((data) => {
      console.log(data);
      this.getData();
    });
  }

  public editStudent(studentId) {
    this.router.navigate(['student-form', studentId]);
  }

  public sortByCode(dir) {
    if (dir === 'up') {
      this.students = _.orderBy(this.students, ['code'], ['desc']);
    } else {
      this.students = _.orderBy(this.students, ['code'], ['asc']);
    }
  }
}
