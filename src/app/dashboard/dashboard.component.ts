import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../shared/services/service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  leaveForm :FormGroup | any;
  staffData : any;
  userName:any;
  getHOD= true;
  getStaff=true;
  staffFullData : any;
  allDataForHod :any;
  flag :any;
  flagForButtonA=true;
  flagForButtonB = false;
  idForButton : any;
  dataForstaff :any=[];
  staffApplyeddata : any;
  totalLeaves : any=0;
  approLeaves: any=0;
  rejectedLeaves:any=0;
  name:any;
  numOfDay:any=[]

  constructor(private userServ:ProductService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.leaveForm=this.fb.group({
      from :this.fb.control('',Validators.required),
      to:this.fb.control('',Validators.required),
      resion:this.fb.control('',Validators.required),
      numOfDay:this.fb.control(' 1'),
      leaveStatus:this.fb.control('Pending'),
      name:this.fb.control('',Validators.required),
      flag:this.fb.control(true)

  })
  console.log(this.userServ.forwordUserToComponent())
  this.staffApplyeddata=this.userServ.catchStaffAlldata()
 
this.userName=this.userServ.forwordUserToComponent()
if(this.userName=='HOD'){
this.getHOD =!this.getHOD
}else{
this.staffData=this.userName
this.getStaff=true
}

  }
  applyForLeave(){
          console.log(this.leaveForm.value);
          console.log(this.leaveForm.value.from);
          console.log(this.leaveForm.value.to);
          console.log(this.staffData);
    const from=Number(this.leaveForm.value.from.slice(8))
    const to=Number(this.leaveForm.value.from.slice(8))
    const day=this.leaveForm.value.to.slice(8)-this.leaveForm.value.from.slice(8)
    Number(day)
    console.log(day);
    console.log(Number(this.leaveForm.value.numOfDay)+day)
    this.leaveForm.value.numOfDay=Number(this.leaveForm.value.numOfDay)+day
    this.staffFullData={
      ...this.leaveForm.value,
      ...this.staffData
    }
    this.userServ.addStaffDataForLeave(this.staffFullData)

this.staffApplyeddata=this.userServ.catchStaffAlldata()
console.log(this.staffApplyeddata);
this.totalLeaves=this.approLeaves+this.rejectedLeaves
      for(let levs of this.staffApplyeddata){
        if(levs.leaveStatus=='Approve'){
          this.approLeaves++
        }else if(levs.leaveStatus=='Reject'){
          this.rejectedLeaves
        }
      }
}
statuForLeave(card:any, status:any, index:any){
  console.log(card,index)
  if(status =='approve'){
    this.flag = 'approve'
    this.flagForButtonA =true
    card.flag = false
    card.leaveStatus = 'Approve'
  }else{
    this.flag ='reject'
    this.flagForButtonB =true
    card.flag =false
    card.leaveStatus = 'Reject'
  }
  
}

}
