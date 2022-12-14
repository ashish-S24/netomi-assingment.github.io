function ValidationEvent(){

let name = document.getElementById('userName').value;
let email = document.getElementById('email').value;
let contactNumber = document.getElementById('contactNumber').value;

var validEmailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
if(name == '' && email == '' && contactNumber==''){
    window.parent.postMessage('');
    return false;
}
if(name != '' && email != '' && contactNumber != ''){
    if(name.length >= 4 && name.length <= 10){
        if(contactNumber.length === 10){
            if(email.match(validEmailPattern)){
                window.parent.postMessage(`Result:{"Success":"All fields are valid."}}`);
                return false;
            }
            else{
                window.parent.postMessage(`Result:{"Email":{"error":"Invalid email."}}`);
                return false;
            }
        }
        else{
            window.parent.postMessage(`Result:{"Contact Number":{"error":"Contact number must be at least 10 digit long."}}`);
            return false;
        }
    }
    else{
        window.parent.postMessage(`Result:{"Name":{"error":"length should be in between 4-10 characters."}}`);
        return false;
    }
}
else{
    window.parent.postMessage(`Result:{"error":"All fields are required."}}`);
    return false;
}


}