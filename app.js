var btn = document.querySelector("#btn-lucky");
var dob = document.querySelector("#birth-date");
var luckynumber = document.querySelector("#lucky-number");
var message = document.querySelector("#message");
var dobsum ;

function checkluckynumber(){
    console.log(dob.value+ " "+luckynumber.value);
    dobsum = dob.value.replaceAll('-','');
    console.log(dobsum);
    let sum =0; 
    for(let i=0 ; i<8;i++) {
        sum = sum+dobsum[i]*1;
    }
    console.log(sum);
    checklucky(sum,luckynumber.value);
}

function checklucky(sum,number){
    
    if (sum%number==0){
        message.innerText=`${number} is lucky 🤩🥳🥳`;
    }else {
        message.innerText=(`${number} is Not that Lucky😥🥺🥺`);  
    }
}

btn.addEventListener("click",checkluckynumber);