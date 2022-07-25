let Name={
    firstName:"mani",
    lastName:"shankar",
    printfullname:function(){
       console.log(this.firstName+" "+ this.lastName);
       }
    }
    Name.printfullname();
    
   let Name2={
       firstName:"ms",
           lastName:"dhoni",
           }
         let Name3={
            firstName:"raj",
            lastName:"kumar",
         }  
           
    Name.printfullname.apply(Name);