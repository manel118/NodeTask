let fs = require("fs")


function addPerson(fname,lname,city,age){
    let person  = {
        fname,
        lname,
        city,
        age
    }
    let Alldata = retreiveData()
    Alldata.push(person)
    storData(Alldata)
}


function retreiveData(){
    try{
        const Alldata = fs.readFileSync("./data.json").toString()
        return JSON.parse(Alldata)
   }catch{
    return[]
   }
}

function storData(Alldata){
   fs.writeFileSync("data.json",JSON.stringify(Alldata))
   console.log("data saved")
}

module.exports= {
    addPerson
}