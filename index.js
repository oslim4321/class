/*  function greet(name1=0,name2=0){

let a=name1+name2

let i=document.getElementById('oinp');
console.log(i.value);
}  */


/* function greet(name1,name2){
let a=name1+name2

let i=document.querySelector('#oinp');
console.log(i.value,i.type);
} */

/* 
function gta(sur1=0,sur2=0){
let g=sur1+sur2


let a=document.getElementById('sel')
let b=document.getElementById('sam')

b.value=a.value
};



function had(jag1,hag2){
let o=jag1+hag2


let y= document.getElementById('sem')
let k= document.getElementById('samu')

k.value=y.value
}
 */




/* function cut(num3,num4){
    let u = num3+num4

   let r= document.getElementById('1_input')
   let M= document.getElementById('cut')
   let k= document.getElementById('2_input')
    M=k.value=r.value
    r.value=""
    k.value-''
} */

/* function nige(num5,num2){
    let d= num5+num2
    let v = document.getElementById('butt')
    let j = document.getElementById('ct')
    let h = document.getElementById('cb')
    let r = document.getElementById('cr')

    v=h.value=j.value,
    j.value=''
} */


/* var array =[3,5,6,9,12,15,14,56,7,8,65,78]
var largest =array[0];
for(var i = 0; i<=array.length; i++){
    if (largest <array[i]){
     var largest = array[i];
    }
}
console.log(largest); */


function farba(gem1,gem2){
 let x= gem1+gem2
 let y= document.getElementById('far')
 let u= document.getElementById('far2')
    u.value=y.value
    y.value=''
};


/* function greet (num1,mum2)

let i = document.queryselector('#boo')

i.innerHTML='welcome to Sqi'
 */


// USING INPUT TO WRITE ON MY HTML TAGS  1

/*  function fat(num3,num4){
let a= num3+num4

 let form=document.querySelector('#excha') 
let h1=document.querySelector('#hh')
    h1.innerHTML=form.value

}   */
// USING INPUT TO WRITE ON MY HTML TAGS   2

/* function fat(red1,red2){
    let q =red1+red2
    let excha= document.querySelector('#excha')
    let hh =document.querySelector('#hh')
    hh.innerHTML=excha.value
} */






let input1=document.querySelector('#input1')
let input2=document.querySelector('#input2')
let input3=document.querySelector('#input3')
let h4= document.querySelector('#h4')


/* function ans(params){


if(input2.value=='+'){
    h4.innerHTML=parseInt(input1.value)+parseInt(input3.value)
}

else if(input2.value=='-'){
    h4.innerHTML=parseInt(input1.value)-parseInt(input3.value)
}

else if(input2.value=='*'){
    h4.innerHTML=parseInt(input1.value)*parseInt(input3.value)
}
else if(input2.value=='/'){
    h4.innerHTML=parseInt(input1.value)/parseInt(input3.value)
}
else if(input2.value=='%'){
    h4.innerHTML=parseInt(input1.value)%parseInt(input3.value)
}

else if(input2.value=='**'){
    h4.innerHTML=parseInt(input1.value)**parseInt(input3.value)
}

 } */



let today= new Date();
let time = today.getHours()+";"+today.getMinutes()+";"+today.getSeconds()+today.getFullYear();
function ansr(params){
    alert(time)
}

// CONCASTINATING

/* let bb  = 'selim';
console.log(`my name is ${bb}`) */


 

/* let bb  = 55;
console.log(`his age is ${bb+6}`) */




/* let bb=33;
let c='8'
console.log(bb*Number(c))  */



//concatinating bollean
/*  let bb=33;
let c=0
console.log(Boolean(c)) */



/* let bb=33;
let c=5
console.log(String(cc)) */
 


/* 
let bb =new Date().getDay()
let cc = "today is" + bb
console.log(cc) */


///VARIABLE SCOPE 


let inpu=document.querySelector('#En_in1')
let inpu2=document.querySelector('#En_in2')
let inpu3=document.querySelector('#En_in3')
let h2=document.querySelector('#h1')

function ansc(params){

    if (isNaN(parseInt(inpu.value)) || isNaN(parseInt (inpu3.value))){
        alert('invalid');
    } 

    if(inpu2.value=='+'){
        h2.innerHTML=parseInt(inpu.value)+parseInt(inpu3.value)
    }
    else if(inpu2.value=='-'){
        h2.innerHTML=parseInt(inpu.value)-parseInt(inpu3.value)
    }
    else if(inpu2.value=='*'){
        h2.innerHTML=parseInt(inpu.value)*parseInt(inpu3.value)
    }
    else if (inpu2.value=='/'){
        h2.innerHTML=parseInt(inpu.value)/parseInt(inpu3.value)
    }
    
}






let b = 'selim';
console.log(`his name his ${b}`)




let u = 56
console.log(`${u*7}`)




function date(){
   let time= today.getHours()
}
console.log(date)




/* constant */

/* const costomer1 ={name:'Selim', age: 19, Drink:'coke beer'}
const costomer2={name:'samad', age: 18, Drink: 'fanta_beer'}
const costomer3={name:'jack', age: 28, Drink: 'coca_beer'}

console.log('%C costomers', 'color: blue; font-weight:bold;')

 console.log({costomer1, costomer2, costomer3})

console.table({costomer1, costomer2, costomer3}) */



let text=document.querySelector('.text')
let read=document.querySelector('.read_more')


read.addEventListener('click', function(){
    text.classList.toggle('active')
});
read.innerHTML=style
