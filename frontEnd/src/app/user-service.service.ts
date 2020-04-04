import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const configUrl = 'localhost:6000/api/v1/user/getall';

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {
  constructor(private http: HttpClient) {
    console.log('web servics are running');
  }

  getAPIData(){
    return this.http.get('http://localhost:5000/api/v1/user/getall');
   }
   

  registerUser(user){
    return this.http.post('http://localhost:5000/api/v1/user/register',{state:user.state, name:user.name, email:user.email,city:user.city});
  }  

   deleteUser(items){
     return this.http.post('http://localhost:5000/api/v1/user/delete', {Id:items});
   }

}