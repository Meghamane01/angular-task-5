import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "./model/staff.model";

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    private resisterUserData: any = [{
        uPsw: "123abc",
        userContact: "54252245",
        userDep: "sales",
        userEmail: "ram@test.com",
        userFirstName: "Sham",
        userHodOrStaff: "Staff",
        userLastName: "bahi",
        userName: "ram"
    }]
    private loginUserData: any = []
    private staffLeaveData: any = [{
        flag: true,
        from: "2023-02-15",
        leaveStatus: "pending",
        numOfDay: 2,
        resion: "Family Function",
        to: "2023-02-17",
        uPsw: "123abc",
        userContact: "54252245",
        userDep: "Sales",
        userEmail: "ram@test.com",
        userFirstName: "Sham",
        userHodOrStaff: "Staff",
        userLastName: "bahi",
        userName: "ram"
    }]
    private StaffAllData: any = []
    firebasedDbLinkFOrLeave: any = "https://task-5-cf4e6-default-rtdb.firebaseio.com/staff.json";

    userData: any;

    constructor(private http: HttpClient) { }

    userSignUpRequest(data: any) {
        console.log(data);
        this.resisterUserData.push(data)
    }
    userLogin(data: any) {
        this.loginUserData.push(data)
    }
    catchUserSignUpData() {
        return this.resisterUserData.slice()
    }
    catchUserSignInData() {
        return this.loginUserData.slice()
    }
    userChecked(user: any) {
        this.userData = user
    }
    forwordUserToComponent() {
        return this.userData
    }
    sendDataFromDb(data: any) {
        return this.http.post(this.firebasedDbLinkFOrLeave, data)
    }
    getAllLeaveDataFromDb() {
        return this.http.get(this.firebasedDbLinkFOrLeave)
    }
    getAlldataForStaff() {
        return this.http.get(this.firebasedDbLinkFOrLeave)
    }
    addStaffDataForLeave(data: any) {
        this.staffLeaveData.push(data)
        console.log(data);
    }
    catchStaffAlldata() {
        return this.staffLeaveData.slice()
    }



}