function OTPGenerator(passwordlength){
    let otp = '';
    if(passwordlength>=5){
        for(let i=0;i<passwordlength;i++){
            otp+=Math.floor(Math.random()*10);
        }
    }
    else{
        alert("OTP Password Length Should Be Greater than `${passowrdlength}`");
    }
    return otp;
    }

//console.log(OTPGenerator(5)); //32537
console.log(OTPGenerator(4));


