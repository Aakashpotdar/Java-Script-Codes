let FirstName='Aakash';
let LastName='Potdar';
let Address='MallikarjunNagar';
let City='Solapur';
let Sate='MH';
let Zip=47837;
let PhoneNumber='+918003728743';
let Email='Aakash@gmail.com';



function CheckNameValidation(name)
{
    let regexName = /^([A-Z][a-z]{3}[a-z]+)$/;
    if(regexName.test(name))
    {
        console.log('the name is valid : '+name);
        return true;
    }
    else
    {
        console.log('the name is Invalid : '+name);
        return false;
    }
    console.log('-----------------------------------');
}

console.log('cheking First name validation: '+CheckNameValidation(FirstName));
console.log('-----------------------------------');
console.log('cheking last name validation: '+CheckNameValidation(LastName));
console.log('-----------------------------------');

function CheckAddressValidation(CheckAddress)
{
    let regex = /^([A-Z][a-z]{4}[a-z]+)$/;
    if(regex.test(CheckAddress))
    {
        console.log('the Details are valid ');
        return true;
    }
    else
    {
        console.log('the Details are Invalid ');
        return false;
    }
    console.log('-----------------------------------');
}
console.log('cheking Address validation: '+CheckAddressValidation(Address));
console.log('-----------------------------------');
console.log('cheking City name validation: '+CheckAddressValidation(City));
console.log('-----------------------------------');

function CheckPhoneNumberValidation(number)
{
    let regexNumber = /^[+]{1}[9][1][6-9][0-9]{9}$/;
    if(regexNumber.test(number))
    {
        console.log('the Details are valid ');
        return true;
    }
    else
    {
        console.log('the Details are Invalid ');
        return false;
    }
    console.log('-----------------------------------');
}
console.log('cheking mobile number validation: '+CheckPhoneNumberValidation(PhoneNumber));
console.log('-----------------------------------');
