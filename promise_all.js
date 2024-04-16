const { resolve, reject } = require("promise");

function one(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("sajith")},10000
        )
    })
}
function two(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("bindiya")},2000
        )

    })
}

one().then((result)=>{console.log(result)
return two()}).then((result)=>{console.log(result)})