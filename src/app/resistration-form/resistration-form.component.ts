import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../shared/services/service';

@Component({
  selector: 'app-resistration-form',
  templateUrl: './resistration-form.component.html',
  styleUrls: ['./resistration-form.component.css']
})
export class ResistrationFormComponent implements OnInit {

  public  resisterUserForm: FormGroup | any;
  constructor(private fb: FormBuilder, private userServ : ProductService) { }

  ngOnInit(): void {
    this.resisterUserForm = this.fb.group({
      userHodOrStaff: this.fb.control('', Validators.required),
      userFirstName: this.fb.control('', Validators.required),
      userLastName: this.fb.control('', Validators.required),
      userEmail: this.fb.control('', Validators.required),
      usercontact: this.fb.control('', Validators.required),
      userDep: this.fb.control('', Validators.required),
      userName: this.fb.control('', Validators.required),
      uPsw: this.fb.control('', Validators.required),
      
  })
}
resisterUser(){
  console.log( this.resisterUserForm.value);
  this.userServ.userSignUpRequest(this.resisterUserForm.value)
  this.resisterUserForm.reset()

}
}
