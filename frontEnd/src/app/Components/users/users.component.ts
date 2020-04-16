import {Component,OnInit,ElementRef, Directive, Input, ViewChild} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserServiceService } from '../../user-service.service';
import swal from 'sweetalert';
import { from } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { NG_MODEL_WITH_FORM_CONTROL_WARNING } from '@angular/forms/src/directives';
export default swal;
import { Inject} from '@angular/core';
const headers = new HttpHeaders ({'Content-Type': 'application/json'});

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit {
  items: any = [];
  data: any = [];
  userForm :boolean = false;
  isNewUser: boolean;
  newUser: any = {};
  users: any = [];
  myData: any;
  itemm :any;
  editUserForm :boolean=false;
  private lists: any = [];
  @ViewChild('myModal') myModal; // Note: TemplateRef
  constructor(private UserServiceService: UserServiceService,private httpClient: HttpClient,private router: Router) { console.log('user controller'); }
  private baseUrl = 'http://localhost:5000/api/v1/user/getall';


  ngOnInit() {
    this.loadData();
  }


/** laod all user when application start */
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


  /** Delete user */
  public delete(items) {
      if(confirm("Are you sure to delete ? ")) { 
        this.UserServiceService.deleteUser(items).subscribe(res=>{
          if(res){
            alert('user deleted successgully!')
             this.loadData();
           } else {
            alert('User is safe');  
           }   
    });
  }
  }


  public editUser(items) {
    this.editUserForm = true;
     //this.editedUser = user;
    this.router.navigateByUrl('/adduser');
  }





public adduser(){
  this.userForm = true;
  this.isNewUser = true;  
}




/** Register user */
public save(user){
  this.UserServiceService.registerUser(user).subscribe(result=>{
    if(result){
      //swal("Good job!", "User has been added succesfully!", "success");
      alert("User has been added succesfully!")
    } this.loadData(); 
  });
  this.loadData();
  }
 
 
 
 
  openModel(myData){
    console.log('open  model edit', myData);
    //this.myModal = true  
  }
 
}
  









