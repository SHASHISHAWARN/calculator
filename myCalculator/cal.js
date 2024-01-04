let a=document.getElementsByClassName('box');
let bool=true
let set;
let str=''
Array.from(a).forEach((ele,index)=>{
    console.log(index)
   ele.addEventListener('click',()=>{
    console.log('hii')
   set=setTimeout(()=>{
      ele.style.backgroundColor='green' 
    },10)
    setTimeout(()=>{
        ele.style.backgroundColor='red' 
        clearTimeout(set)
    },100)
    if(ele.innerText !='=')
    {
        str+=ele.innerText;
        input.innerText=str;
    }
     if(ele.innerText==='=')
    {
        input.innerText=eval(str)
    }

   })
})
