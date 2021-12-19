let temp=40;
let DegC=0;
let DegF=0;
function ConvertDegFToDegC(DegF)
{
    DegC=(DegF-32)*(5/9);
    console.log('the conversion of F to C: '+DegC);
}
function ConvertDegCToDegF(DegC)
{
    DegF=(DegC*(5/9))+32;
    console.log('the conversion of C to F: '+DegF);
}
console.log('to convert DegC to DegF press 2 and DegF to DegC press 1');
let num=input();
switch(num)
{
    case 1:
        ConvertDegFToDegC(temp);
        break;
    case 2:
        ConvertDegCToDegF(temp);
        break;    
}
