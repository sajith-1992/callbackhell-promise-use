function add(num1,num2,callback){
var err=false
if (num1===0){
    err=true
}

    callback(num1+num2,err)}
function multiply(num1,num2,callback){
    callback(num1*num2)

}
div=(num1,num2,callback)=>{{
    callback(num1/num2)
}

}



add(10,20,(sum,err)=>{if(err){
    console.log("error")}else{
        console.log(sum)
        multiply(sum,sum,(product)=>{console.log(product)
        div(product,10,(result)=>{
            console.log(result)
            
        })})
    }
})
const promise=require('promise')
function add(num1,num2){
    


}