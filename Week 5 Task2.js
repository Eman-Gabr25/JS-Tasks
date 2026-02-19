let student1 = 
{
    name: "Eman",
    marks: 99,
    passed: true,
    info: function () 
    {
        console.log(
            "Name: " + this.name +
            ", Marks: " + this.marks +
            ", Passed: Yes");
       
    }
};

let student2 = 
{
    name: "Esraa",
    marks: 45,
    passed: false,
    info: function () 
    {
        console.log(
            "Name: " + this.name +
            ", Marks: " + this.marks +
            ", Passed: No");
        
    }
};

let student3 = 
{
    name: "jana",
    marks: 70,
    passed: true,
    info: function () 
    {
        console.log(
            "Name: " + this.name +
            ", Marks: " + this.marks +
            ", Passed: Yes");
       
    }
};

 let students = [student1, student2, student3];

let passcount = 0;

for (let i = 0; i < students.length; i++) {
    students[i].info();

    if (students[i].passed) {
        passcount++;
    }
}

console.log("Total Passed Students:", passcount);
