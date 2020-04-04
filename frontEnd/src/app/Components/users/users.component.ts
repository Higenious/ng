import {Component,OnInit,ElementRef, Directive, Input, ViewChild} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserServiceService } from '../../user-service.service';
import {AdduserComponent} from '../users/adduser/adduser.component';
import swal from 'sweetalert';
import { from } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
export default swal;
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


  public delete(items) {
      swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover!",
      icon: "warning",
      dangerMode: true,
    })
    .then((willDelete) => {
     this.UserServiceService.deleteUser(items).subscribe(res=>{
       if(res){
         if (willDelete) {
          swal("Poof! user has been deleted!", {
            icon: "success",
          });
          this.loadData();
        } else {
          swal("user is safe!");
        }
      }
     })
    });

  }

  public registerUser() {
    this.router.navigateByUrl('/adduser');

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

public save(user){
  this.UserServiceService.registerUser(user).subscribe(result=>{
    if(result){
      swal("Good job!", "User has been added succesfully!", "success");
    }
    this.loadData();
  });
  }

  openModel(myData){
    console.log('open  model edit', myData);
    //this.myModal = true;
 
     
  }
 
}
  









