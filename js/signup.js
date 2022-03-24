// function validation() {
//     var email = document.entry_form.email;
//     var pass = document.entry_form.pass;

//     if (email.value.length <= 0) {
//         document.getElementById(email1).innerHTML = '!!Enter Email ';
//         email.focus();
//         console.log('Email', email)
//         return false;
//     }
//     if (pass.value.length <= 0) {
//         document.getElementById('pass1').innerHTML = '!!Enter password ';
//         return false;
//     }
//     return false;
// }
function getData() {
    //gettting the values
    var name = document.getElementById("name").value;
    var last = document.getElementById("last").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    //saving the values in local storage
    localStorage.setItem("txtValue", name);
    localStorage.setItem("txtValue1", last);
    localStorage.setItem("txtValue2", email);
    localStorage.setItem("txtValue3", password);

}

function Name(id) {
    var elem = document.getElementById(id);
    var reg = /^[a-zA-Z ]+$/;
    if (!reg.test(elem.value)) {
        // document.getElementById('name1').innerHTML = 'Enter Character';
        elem.style.border = "2px solid red";
        return false;
    } else {
        // document.getElementById('name1').innerHTML = " ";
        elem.style.border = "2px solid green";
    }

}

function Last(id) {
    var elem = document.getElementById(id);
    var reg = /^[a-zA-Z ]+$/;
    if (!reg.test(elem.value)) {
        // document.getElementById('name1').innerHTML = 'Enter Character';
        elem.style.border = "2px solid red";
        return false;
    } else {
        // document.getElementById('name1').innerHTML = " ";
        elem.style.border = "2px solid green";
    }

}



function Email(id) {
    var elem = document.getElementById(id);
    // console.log('emailemailemailemail', elem, id)
    console.log('Validate Email')
    var reg = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+\.[a-zA-Z]{3}$/;
    if (!reg.test(elem.value)) {
        // document.getElementById('email1').innerHTML = "Enter a Valid Email";
        elem.style.border = "2px solid red";
        return false;
    } else {
        // document.getElementById('email1').innerHTML = " ";
        elem.style.border = "2px solid green";
    }
}

function Pass(id) {
    var elem = document.getElementById(id);
    var reg = /^[a-zA-Z0-9._]{8}$/;
    if (!reg.test(elem.value)) {
        // document.getElementById('pass1').innerHTML = 'Enter a 8 digit password';
        elem.style.border = "2px solid red";
        return false;
    } else {
        // document.getElementById('pass1').innerHTML = " ";
        elem.style.border = "2px solid green";

    }
}