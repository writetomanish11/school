class School{
    constructor(p1,p2,p3){
this.name=p1;
this.rollno=p2;
this.address=p3;
}
 printSchool(){
    console.log(`The name of school is ${this.name}`)
}
}
let school= new School("D.A.V",

["Larner1","Larner2","larner3"],
"Patna"
);
school.printSchool();
