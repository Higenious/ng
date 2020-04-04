import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserServiceService } from "../app/user-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myData: any =[];
  constructor(private UserServiceService :UserServiceService, private _router: Router) { }

  ngOnInit() {
    this._router.navigate(['/users'])
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
