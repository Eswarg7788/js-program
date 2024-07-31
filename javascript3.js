// 1.Array creation
let arr=[1,2,3,4,5]
console.log(arr);

//2.Array Manipulation
let c=[20,40,60,30,10];
c.pop()
console.log(c)

c.push(50)
console.log(c)

c.shift()
console.log(c)

c.unshift(70)
console.log(c)

//3.Array Searching
let vv=[54,60,25,30,24,22,50]
console.log(vv.indexOf(30))
console.log(vv.lastIndexOf(50))  

// 4.filtering
let numbers = [15,20,30,40];
let greaterThan=numbers.filter
(numbers=>numbers>20);
console.log(greaterThan);
 
// 4. filter string method
let message=['eswar','seenu','kishore','selvakanabathi'];
let m1=message.filter(message=>message.length<6)
console.log(m1) 

//5.Mapping
let dee=[1,2,3,4,5]
console.log(dee.map(x=>x*2))

//6.Array Sorting
let a=[50,20,10,80,30];
console.log(a.sort());
//Array reverse
let d=[50,40,30,20]
console.log(d.reverse(),);

// 7.join & splitting
let oo=[4,7]
console.log(oo.join(10))

let j="40 80"
const j2=j.split("")
console.log(j2)

//8. Array Destructing
let arr=[1,2,3,4,5,6,7,8,9]
let [a,b,c,d,e,f,g,h,j]=arr
console.log(a,b)

//9.Array spreading
let kk=[10,20]
let nn=[30,40]
console.log(...kk,...nn)

//10.Array Maximum and minimum
let arr=[52,32,96,74,20,85,10,]
let arr2=Math.max(...arr)
console.log(arr2)

let arr3=[52,32,96,74,20,85,10,]
let arr4=Math.min(...arr3)
console.log(arr4)
 
// 12.Checking array elements
let obj={a:1,b:null}
console.log(obj.a==1)
console.log(obj.b==3)  

//13.Array of object sorting
let sorting=[
  {movie:'Beast',year:2019},
  {movie:'Mersal',year:2017},
  {movie:'Harry Potter',year:2001}]
  sorting.sort((a,b)=>a.year - b.year)
  console.log(sorting)

//14.merge array
let rr=[4,5,6,8,3]
let ll=[2,1,7,9]
console.log(rr+","+ll)

//15.Index of first occurence
let  gg=[8,5,6,7,8]
console.log(gg.indexOf(8))

//16.new array with a given length
     let str="ESWAR";               
     let length=str.length;
     console.log(length);

//  17.arrayduplicate
      let ar=[10,20,30,20,30,40,50,10]             
      let arrayduplicate=[...new Set(ar)]
      console.log(arrayduplicate)