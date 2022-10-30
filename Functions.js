//FUNCTIONS IN JAVASCRIPT

//Function declaration
function greatUser(){
    console.log("Hello Kemboi")
}
// callng or execute a function
greatUser()



let userName="Brian Kemboi"
function greatUser2(){
//    console.log("helo "+ userName )  //same as the next line
console.log(`Hello ${userName}`)
}
greatUser2()


//USING RETURN
function greetings(name){
    // console.log("Hello "+ name +"! You won the Race.") //same as the next line
    return `Hello ${name} "! You won the game`
}
console.log(greetings("Brian"))


//USING CONSOLE.LOG
function greetings2(name){
    // console.log("Hello "+ name +"! You won the Race.") //same as the next line
    console.log(`Hello ${name} "! You won the race`)
}
greetings2("Brian")



//we pass parameters to the function
function letsAdd(a,b,c,d){
    console.log(a+b+c+d)
}
//we call arguments
letsAdd(2,4,6,8)

//FUNCTION AND ARRAYS
function ourArray(arr1){
    for(let i=0;i<arr1.length;i++){
     console.log(arr1[i])
    }
}
ourArray(arr1=["Brian", "John","Patrick"])



//Same as:
function ourArray2(arr1){
for(let number of arr1){
    console.log(number)
}
}
ourArray2(arr1=[1,2,3,4,5])



// Use of return instead of console.log in functions
function compare(numArr, number){
    for(let i=0;i<numArr.length;i++){
        if(numArr[i]===number){
            return true
        }
    }
    return false  
    
}
//this console.log helps you see the solution but can run on browser console without it
console.log(compare([9,4,7,2],11))
//compare([9,4,7,2],9) //This runs in browser





