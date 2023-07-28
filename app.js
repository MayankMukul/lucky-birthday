var btn = document.querySelector("#btn-lucky");
var dob = document.querySelector("#birth-date");
var luckynumber = document.querySelector("#lucky-number");
var dobsum ;
function checkluckynumber(){
    console.log(dob.value+ " "+luckynumber.value);
    dobsum = dob.value.replaceAll('-','');
    //dobsum = dobsum.replaceAll('','+');
    console.log(dobsum);
    let sum =0; 
    for(let i=0 ; i<8;i++) {
        //dobsum[i]=dobsum[i]*1;   
        sum = sum*1+dobsum[i]*1;
       
    }
    console.log(sum);
}

btn.addEventListener("click",checkluckynumber);