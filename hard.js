//const fs = require('fs');

var employees = {
    1: {
        employeeID: 234905,
        name: "Mickey",
        salary: 48000,
        department: 'sales',
    },
    2: {
        employeeID: 692849,
        name: "Jane",
        salary: 76000,
        department: 'marketing',
    },
    3: {employeeID: 394024,
        name: "Robert",
        salary: 73000,
        department: 'troubleshooting'
    },
    4: {employeeID: 456078,
        name: "Tatiana",
        salary: 65000,
        department: 'product design',
    },
    5: {employeeID: 945271,
        name: "Marquis",
        salary: 110000,
        department: 'sales'
    },
    6: {employeeID: 850342,
        name:"Olivia",
        salary: 680000,
        department: 'data management',

    },
    7: {employeeID: 345275,
        name: 'Matheus',
        salary: 91000,
        department: 'troubleshooting',

    },
    8: {employeeID: 209184,
        name: "Suzie",
        salary: 55000,
        department: 'marketing',

    }, 
    9: {employeeID: 403254,
        name: "Asa",
        salary: 81000,
        department: "data management",

    },
    10: {employeeID: 190362,
        name: "Lena",
        salary: 56000,
        department: 'product design',

    }
};
//creating json file
var employeeString = JSON.stringify(employees);

var fs = require('fs');
fs.writeFile("hard.json", employeeString, err =>{
    if(err){
        console.log(err);
    }
    else{
        console.log("json file written successfully.")
    }
});