var btn = document.querySelector("#btn-lucky");
var dob = document.querySelector("#birth-date");
var luckynumber = document.querySelector("#lucky-number");
var message = document.querySelector("#message");
var dobsum ;

function checkluckynumber(){

    dobsum = dob.value.replaceAll('-','');
    
    let sum =0; 
    for(let i=0 ; i<8;i++) {
        sum = sum+dobsum[i]*1;
    }

    if(luckynumber.value !== '' && dobsum !== ''){
        checklucky(sum,luckynumber.value);
    }else if (dobsum == ''){
        message.innerHTML=`<span style= "color : red"> Please Enter Your Birth Date! </span>`;
    } else if (luckynumber.value == '') {
        message.innerHTML = `<span style= "color : red"> Please enter your lucky number! </span>`;
    } 
   
}

function checklucky(sum,number){
    
    if (sum%number==0){
        message.innerText=`${number} is lucky 🤩🥳🥳`;
    }else {
        message.innerText=(`${number} is Not that Lucky😥🥺🥺`);  
    }
}

btn.addEventListener("click",checkluckynumber);