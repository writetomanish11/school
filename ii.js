// console.log("mani");

let Name={
 firstName:"mani",
 lastName:"shankar",
 printfullname:function(){
    console.log(this.firstName+" "+ this.lastName);
    }
 }
 Name.printfullname();
 
let Name2={
    firstName:"appurv",
        lastName:"prakash",
        }
        
        
 Name.printfullname.apply(Name);






