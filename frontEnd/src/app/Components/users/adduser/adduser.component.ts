import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {UserServiceService} from  '../../../user-service.service';
import swal from 'sweetalert';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})

export class AdduserComponent implements OnInit {
  userForm: boolean = false;
  isNewUser : boolean =false;
  newUser: any = {};
  myData: any;
  editUserForm: boolean = false;
  constructor(private http:HttpClient, private UserServiceService :UserServiceService, private router:Router ) { }

  ngOnInit() {
  }

 
public adduser(){
  this.userForm = true;
  this.isNewUser = true;  
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

public save(user){
  this.UserServiceService.registerUser(user).subscribe(result=>{
    var keys = Object.keys(result);
    if(keys[0] == 'errors'){
      swal("Please try Again!", "failed to add user!", "error");
    }else{
      swal("Good job!", "User has been added succesfully!", "success");
    }
    this.loadData();
    this.router.navigateByUrl('/users');
  }, error => {
    alert("ERROR");
 });
  }



  public cancelNewUser() {
    this.newUser = {};
    this.userForm = false;
  }

  

  showEditUserForm(user) {
    if (!user) {
      this.userForm = false;
      return;
    }
    this.editUserForm = true;
    //this.editedUser = user;
  }

 
 
}
  