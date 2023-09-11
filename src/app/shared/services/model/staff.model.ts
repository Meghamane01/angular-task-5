export class Product{
   
    name : string;
    leavefrom: string;
    leaveto : string;
    days : string;
  reasons:string;
    
        constructor(hname : string,hleavefrom: string,hleaveto: string, hdays: string,hreasons: string){
      this.name = hname;
   this.leavefrom= hleavefrom;
   this.leaveto= hleaveto;
   this. days= hdays;
  this.reasons =hreasons;

  }
}