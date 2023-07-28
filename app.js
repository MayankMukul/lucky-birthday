var btn = document.querySelector("#btn-lucky");
var dob = document.querySelector("#birth-date");
var luckynumber = document.querySelector("#lucky-number");
var dobsum ;
function checkluckynumber(){
    console.log(dob.value+ " "+luckynumber.value);
    dobsum = dob.value.replaceAll('-','');
    //dobsum = dobsum.replaceAll('','+');
    //console.log(dobsum);
     
    for(let i=0 ,sum =0; i<8;i++) {
        
        sum = sum+dobsum[i];
        console.log(sum);
    }
    
}

btn.addEventListener("click",checkluckynumber);