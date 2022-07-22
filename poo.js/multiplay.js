class School{
    constructor(p1,p2,p3){
this.name=p1;
this.rollno=p2;
this.address=p3;
}
 printSchool(){
    console.log(`The name of school is ${this.name} ${this.address}${this.rollno} `)
}
}
let school= new School("D.A.V","patna","0187ex101213",

["Larner1","Larner2","larner3"],
"Patna"
);
school.printSchool();
