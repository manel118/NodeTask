const yargs = require("yargs")
 const afficheF =  require("./dataOperaion.js") 
yargs.command({
    command: "add",
    describe: "to add an item",
    builder : {
        fname : { 
            describe: "this is the first name",
            demandOption : true,
            type: "string"
        },
        lname : {
            describe : " this is the last name",
            demandOption : true ,
            type : "string"
        }
    },
    handler: (x) => {
        afficheF.addPerson(x.fname,x.lname,x.city,x.age)
    },
    
    
}
)
yargs.parse()
