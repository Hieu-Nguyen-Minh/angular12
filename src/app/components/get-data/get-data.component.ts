import { Component, OnInit } from '@angular/core';
import { HttpServerService } from 'src/app/services/http-server.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss'],
})
export class GetDataComponent implements OnInit {
  constructor(private httpServerService: HttpServerService) {}

  ngOnInit(): void {
    this.httpServerService.getcomnent().subscribe((data) => {
      console.log('data', data);
    });

    this.httpServerService.getUser(10).subscribe((data) => {
      // console.log('user', data.results);
    });
  }
}
