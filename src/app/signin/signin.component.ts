import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../shared/services/service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public loginForm:FormGroup | any;
  public signUpData : any;
  userLog : any;

  constructor(private fb :FormBuilder,private router: Router,private activeRoute: ActivatedRoute,
    private userServ : ProductService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName : this.fb.control(null,Validators.required),
      uPsw : this.fb.control('',Validators.required)
  })
}
loginUser(){
  this.userServ.userLogin(this.loginForm)
  this.signUpData=this.userServ.catchUserSignUpData()

for(const element of this.signUpData){
console.log(element);

if((element.userName == this.loginForm.value.userName)&& (element.uPsw == this.loginForm.value.uPsw)){
  console.log(element. userEmail);
  console.log(element. userHodOrStaff);
  if(element.userHodOrStaff == "HOD"){
this.userLog = element.userHodOrStaff
this.userServ.userChecked(element.userHodOrStaff)
this.router.navigate(['/dashboard'],{relativeTo: this.activeRoute})
  }else{
    this.userLog = element
    this.userServ.userChecked(element)
    this.router.navigate(['/dashboard'],{relativeTo: this.activeRoute})
  }
}else{
  console.log('You are not resistered user');
  }
}
}
}
