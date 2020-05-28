import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-requests-highlighted',
  templateUrl: './requests-highlighted.component.html',
  styleUrls: ['./requests-highlighted.component.css']
})
export class RequestsHighlightedComponent implements OnInit {

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