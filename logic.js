let firstValue=document.getElementById('first');
let secondValue=document.getElementById('second');
let screen=document.getElementById('result');
 let buttons=document.querySelectorAll('button');
for(item of buttons){
    item.addEventListener('click',(sanjay)=>{
       let buttonText=sanjay.target.innerText;
        if(buttonText=='Modulo'){
            let product=firstValue.value%secondValue.value;
            screen.value=product;
        }else if(buttonText=='Divide'){
            let product=firstValue.value/secondValue.value;
            screen.value=product;
        }else if(buttonText=='Multiply'){
            let product=firstValue.value*secondValue.value;
            screen.value=product;
        }else if(buttonText=='Minus'){
            let product=firstValue.value-secondValue.value;
            screen.value=product;
        }else if(buttonText=='Adding'){
            let product=+firstValue.value + +secondValue.value;
            screen.value=product;
        }else if(buttonText=='All Clear'){
          screen.value=" ";
          firstValue.value=" ";
          secondValue.value=" ";
        }
    })
}
 