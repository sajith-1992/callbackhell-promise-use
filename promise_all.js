const { resolve, reject } = require("promise");

function one(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("sajith")},1000        )
    })
}
function two(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("bindiya")},2000
        )

    })
}

async function three(){
    let name = await one()
    console.log(name)
}
three()