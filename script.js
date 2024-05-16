// alert("Error");
function Addnewwef()
{
   let newnode= document.createElement('textarea');
   newnode.classList.add('form-control');
   newnode.classList.add('mt-2');
   newnode.setAttribute('placeholder','Enter here');
   newnode.classList.add('weField');
   
   newnode.setAttribute('rows',3);

   let weOb= document.getElementById('we');

   let weAddbuttonOb=document.getElementById('weAddbutton');
    weOb.insertBefore(newnode,weAddbuttonOb);
}
function Addedu()
{
    let newnode= document.createElement('textarea');
    newnode.classList.add('form-control');
    newnode.classList.add('mt-2');
    newnode.setAttribute('placeholder','Enter here');
    newnode.classList.add('eqqual');

    newnode.setAttribute('rows',3);
    let adob= document.getElementById('adu');
    let adAddbuttonOb=document.getElementById('acadQualAddButton');
    adob.insertBefore(newnode,adAddbuttonOb);

}
// Generate cv
function generateCV()
{
    var nameFieldValue = document.getElementById("nameField").value.trim();
        var phoneFieldValue = document.getElementById("PhoneField").value.trim();
        var addressFieldValue = document.getElementById("AddressField").value.trim();
        var facebookLinkValue = document.getElementById("FacebookLink").value.trim();
        var githubLinkValue = document.getElementById("GithubLink").value.trim();
        var linkedInLinkValue = document.getElementById("LinkedIDLink").value.trim();
        var objectiveValue = document.getElementById("obj").value.trim();
    if( nameFieldValue === "" ||
    phoneFieldValue === "" ||
    addressFieldValue === "" ||
    facebookLinkValue === "" ||
    githubLinkValue === "" ||
    linkedInLinkValue === "" ||
    objectiveValue === "" 
    )
    {
        alert("please fill the form first");
        return;
    }
    
    let namef= document.getElementById('nameField').value;
    let namt1= document.getElementById('namet');
    namt1.innerHTML=namef;
    var capitalized = namef.toUpperCase();
    document.getElementById('namet2').innerHTML=capitalized;

    let phot= document.getElementById('PhoneField').value;
    document.getElementById('phonet').innerHTML=phot;

    let adot= document.getElementById('AddressField').value;
    document.getElementById('addresst').innerHTML=adot;

    let fbot= document.getElementById('FacebookLink').value;
    document.getElementById('fbt').innerHTML=fbot;
    
    let gbot= document.getElementById('GithubLink').value;
    document.getElementById('gitT').innerHTML=gbot;

    let lbot= document.getElementById('LinkedIDLink').value;
    document.getElementById('linkT').innerHTML=lbot;
    
    let obt= document.getElementById('obj').value;
    document.getElementById('objt').innerHTML=obt;

    let ar1= document.getElementsByClassName('weField'); 
    let str=''

    for(let e of ar1)
    {
        str=str+`<li>${e.value}</li>`
    }
    document.getElementById('wet').innerHTML=str

    let ar2= document.getElementsByClassName('eqqual');
    let str2=''
    
    for(let e of ar2)
    {
        str2=str2+`<li>${e.value}</li>`

    }



    document.getElementById('qt').innerHTML=str2

    let fi=document.getElementById('imgf').files[0];
    let read= new FileReader();
    read.readAsDataURL(fi)

    // set image
    read.onloadend = function()
    {
        document.getElementById('myimg').src=read.result;
    }



    document.getElementById('cv-form').style.display='none'
    document.getElementById('cvtemplate').style.display='block'
}

function printcv()
{
    window.print();
}