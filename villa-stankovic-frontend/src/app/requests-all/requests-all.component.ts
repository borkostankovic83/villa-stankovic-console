import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-requests-all',
  templateUrl: './requests-all.component.html',
  styleUrls: ['./requests-all.component.css']
})
export class RequestsAllComponent implements OnInit {

  response: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getRequests();
  }

  getRequests() {
    this.http.get('http://localhost:8080/request')
    .subscribe(
      (response) => {this.response = response; 
      console.log(response);
    })
  }

}
