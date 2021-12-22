//Pincode UC1 to UC4
function CheckPinCodeValidation1(Pin)
{
    let regexPin = /^\d{6}$/;
    if(regexPin.test(Pin))
    {
        console.log('the Pincode is valid : '+Pin);
        return true;
    }
    else
    {
        console.log('the Pincode is Invalid : '+Pin);
        return false;
    }
    console.log('-----------------------------------');
}

let PinCode1="400088";
 CheckPinCodeValidation1(PinCode1);

 
 function CheckPinCodeValidation2(Pin)
{
    let regexPin1 = /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/;
    if(regexPin1.test(Pin))
    {
        console.log('the Pincode2 is valid : '+Pin);
        return true;
    }
    else
    {
        console.log('the Pincode2 is Invalid : '+Pin);
        return false;
    }
    console.log('-----------------------------------');
}

let PinCode2="934 288";
 CheckPinCodeValidation2(PinCode2);

 //Validate EmailId

 function EmailIdValidation(Id)
 {
     let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if(regexEmail.test(Id))
     {
         console.log('the mail ID is valid : '+Id);
         return true;
     }
     else
     {
         console.log('the mail ID is Invalid : '+Id);
         return false;
     }
     console.log('-----------------------------------');
 }
 
 let EmailId="abc.xyz@Bridglabz.co.in";
 EmailIdValidation(EmailId);
