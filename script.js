/*sinaloacarrepair@gmail.com
*/
let firstName=document.getElementById("firstname");
let secondName=document.getElementById("secondname");
let emailAdress=document.getElementById("email");
let message=document.getElementById("message");
let errorFirstName=document.getElementById("errorFirstName");
let errorSecondName=document.getElementById("errorSecondName");
let errorEmail=document.getElementById("errorEmail");
let errorMessage=document.getElementById("errorMessage");
let btn=document.querySelector("button");


const checkEmail=()=>{
    let result=false;
    let validateEmail=emailAdress.value.includes("@");
    if(emailAdress.value.length>0 && validateEmail){
        result=true;
        emailAdress.style.border="none";
        errorEmail.style.display="none";
    }
    else{
        emailAdress.style.border="3px solid red";
        errorEmail.style.display="block"
    }
    return result;
}

function checkInputValidation(element,errorElement){
    let validationResult=false;
    if(element.value.length==0){
        element.style.border="3px solid red";
        errorElement.style.display="block";
    }
    else{
        element.style.border="none";
        errorElement.style.display="none";
        validationResult=true;
    }
    return validationResult;
}

function checkMessage(){
    let validationResult=false;
    if(message.value.length==0){
        message.style.border="3px solid red";
        errorMessage.style.display="block";
    }
    else{
        errorMessage.style.display="none"
        message.style.border="none";
        validationResult=true;
    }
    return validationResult;
}

function sendEmail(){
    var templateParams = {
        firstName: firstName.value,
        secondName: secondName.value,
        email: emailAdress.value,
        message: message.value,
    };
    // console.log(templateParams)

    emailjs.send('service_53cox8g', 'template_oh9ekkx', templateParams).then(
    (response) => {
        console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
        console.log('FAILED...', error);
    },
    );
}
btn.addEventListener("click",()=>{
    let checkFirstName=checkInputValidation(firstName,errorFirstName);
    let checkSecondName=checkInputValidation(secondName,errorSecondName);
    let checkEmailAdress=checkEmail();
    let checkMessageContent=checkMessage();
    if(checkFirstName && checkSecondName && checkEmailAdress && checkMessageContent){
        sendEmail();
        document.querySelector("form").reset();
    }
    

})


