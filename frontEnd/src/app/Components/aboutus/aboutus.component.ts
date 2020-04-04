import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserServiceService } from '../../user-service.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  myData: any =[];
  constructor(private UserServiceService :UserServiceService) { }

  ngOnInit() {
    this.loadData();
  }

  public loadData() {
    this.UserServiceService.getAPIData()
      .subscribe(
        (data: any) => {
          this.myData = data.result;
        },
        error => {
          alert("ERROR");
        });
  }
}
