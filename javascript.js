// let a = 10;
// let b = 20;
// console.log("sum :",a+b);

// let d = "helloworld"
// console.log(d);
 
// let s = 3;
// let f = 5;
// console.log(s*f);

// let p=2;
// let o=9;
// let x=8;
// console.log("sum :",p*o*x,"<br>");
// console.log("sum :",p-o-x,"<br>");
// console.log("sum :",p/o/x,"<br>");
// console.log("sum :",p+o+x,"<br>");

// let obj={
//     name:"eswar",
//     age:20
// }
// console.log(obj);
// let news={
//     title:"desk",
//     price:45
// }
// console.log(news["title"]);
 
// let student={
//     name:"ramu",
//     dob:"15.12.2004",          
//     age:19
// }
// student.age=20;
// console.log(student);

// let student={
//     name:"ramu",
//     dob:"15.12.2004",          
//     age:19
// }
// student.city="coimbatore";
// console.log(student);

// let jam={
//     title:"desk",
//     book:3
// }
// let eswar={
//     frd:"vicky",
//     clash:500
// }
// const jo={
//     ...eswar,
//     ...jam,
// }
// console.log(jo);
  
// function dhivith(){
//     alert("welcome");
// }
// dhivith();

// function Message(){
//     alert("Welcome Message");
// }

// function eswar(){
//     alert("submitted successfully");
// }
// function message (num1, num2){
//             let sum=num1 +num2;
//             console.log(sum);
// }
//    message(8,10);
//  function message(num){
//          return  num*num;
//  }
//  console.log(message(5));
// function message(num1,num2){
//     sum1= num1*num2;
//     sum2= num1+num2;
//     sum3= num1-num2;
//     sum4= num1/num2;
//     console.log(sum1,sum2,sum3,sum4);
// }
//      message(7,10);
// function  add(num1,num2){
//     return num1+num2;
// }
// console.log(add(5,3));
// function  sub(num1,num2){
//     return num1-num2;
// }
// console.log(sub(5,3));
// function  mul(num1,num2){
//     return num1*num2;
// }
// console.log(mul(5,3));
// function  div(num1,num2){
//     return num1/num2; 
// }
// console.log(div(5,3));
// function num(s){
//     if(s%2==0){
//         return("even");
//     }
//     else{
//         return("odd");
//     }
// }
// console.log(num(5));
// function eswar(str){
//     return str.toLowerCase();
// }
// console.log(eswar("DWSA"));
// function sum(num){
//     if (num=>1){
//         return "positive" 
//     }
//     else if(num==0){
//         return "zero"
//     }
//     else {
//         return "negative"
//     }
// }
// console.log(sum(5));
// function max(num1,num2,num3){
//     return Math.max(num1,num2,num3)
// }
// console.log(max(1,2,3));
// function leap(year){
//     if(year%4==0 || year%400==0 && year%100!==0){
//         return("It is leap year")
//     }
//     else{
//         return("It is not a leap year")
//     }
// }
// console.log(leap(2021))
// function max(num1,num2,num3){
//      if(num1>num2){
//         return(num1)
//      }
//      else if(num2>num3){
//         return(num2)
//      }
//      else{
//         return(num3)
//      }
// }
// console.log(max(100,200,300))
// function hari(arr){
//     let sum=0
//     for(i=0;i<arr.length;i++){
//         sum=sum+arr[i];
//     }
//     return sum
// }
// arr=[4,5,6,8]
// console.log(hari(arr));
// function hari(arr){
//     let sum=0
//     for(i=0;i<arr.length;i++){
//         sum=sum+arr[i];
//         hari(arr)/4
//     }   
// } 
// arr=[4,5,6,8]
// console.log(hari(arr))
// function convert(query){
//     let a= Math.round(query/60);
//     let b= query%60;
//     return(a+"hrs"+b+"mins");
// }
// console.log(convert(200));
// function eswar(age){
// if (age<=35){
//     console.log("false")
// }
// else if(age==40){
//     console.log("True")
// }
// else {
//     console.log("false")
// }
// }
// eswar(35)
// function eswar(num){
//     if(num%3==0 && num%5==0){
//         console.log("3 star and 5 star")
//     }
//     else if(num%5==0){
//         console.log("5 star")
//     }
//     else if(num%3==0){
//         console.log("3 star")
//     }
//     else{
//         console.log("no star")
//     }
// }
// eswar(8)
// console.log(0.1 + 0.2 == 0.3)
// let arr =[1,2,3,4];
// let newArr=arr.map(x=>x*2)
// console.log(newArr)

//  let a = 5; 
// let b = 10; 
// let c = `${a} + ${b}`; 

// console.log(c); 
// function shop(age){
//     if(age>=67){
//         console.log("elegible")
//     }
//     else{
//         console.log("not elegible")
//     }
// }
// shop(55);
// function access(role){
//     if(role=="admin")
//         console.log("grented");
//     else
//     console.log("no");
// }
// access("admin");
// let result = confirm("small girl")
// if (res==true)
//     window.alert("ok");
// else
//     window.alert("cancel");

// const welcome={
//     firstname:"ESWAR",
//     lastname:"AN",
//     name:function(){
//         console.log(this.firstname+this.lastname);
//     }
// }
// welcome.name()

// const add=(a,b)=>a+b;
// console.log(add(5,10));
// function hari(){
//     document.getElementById("eswar").style="color:yellow;background-color:black;font-family:arial;font-size=large"

let promise = new promise(resolve,reject)=>{
    let success = true;
    if(success){
        resolve("operation successful");
    }
    else{
        reject("opereaton failed");
    }
}