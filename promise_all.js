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

Promise.all([one(),two()]).then((result)=>{
    console.log(result)
})