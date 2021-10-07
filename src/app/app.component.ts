import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { CommonService } from './services/common.service';
import { HttpServerService } from './services/http-server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular12leanging';
  @ViewChild('sidenav') sidenav: MatSidenav;
  public isOpened = false;
  public totalStudent;
  constructor(private common: CommonService, private http: HttpServerService) {}

  ngOnInit() {
    this.common.totalStudent$.subscribe((total) => (this.totalStudent = total));

    if (this.common.totalStudent === 0) {
      this.http
        .getStudents()
        .subscribe((student) => this.common.setTotalStudent(student.length));
    }
  }

  openLeftSide() {
    this.isOpened = !this.isOpened;
    this.sidenav.toggle();
  }

  closeLeftSide() {
    this.isOpened = false;
  }
}
