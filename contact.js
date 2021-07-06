let date = new Date();
let fullyears = date.getFullYear();

document.getElementById("last-line").textContent="copyright @" + fullyears + " " + "All rights reserved | This is made by RuthikSalvi";


function validate() {
    return (validateFirstname() &&
        validateLastname() &&
        validateEmail() &&
        validateQuery() &&
        validatephone());


    function validateFirstname() {
        let username = document.getElementById("fname").value;
        let regx = /^[a-z A-Z]{2,100}$/;
        if (regx.test(username)) {
            document.getElementById("fname").style.border = "2px solid green";
            return true;
        } else {
            document.getElementById("fname").style.border = "2px solid red";
            return false;
        }
    }



    function validateLastname() {
        //lastname
        let lastname = document.getElementById("lname").value;
        let lastn = /^[a-zA-Z]{2,100}$/;
        if (lastn.test(lastname)) {
            document.getElementById("lname").style.border = "2px solid green";
            return true;
        } else {
            document.getElementById("lname").style.border = "2px solid red";
            return false;
        }
    }

    function validateEmail() {
        //email
        let add = document.getElementById("email-id").value;
        let regadd = /^([a-zA-Z0-9\.-]+)@([a-z0-9-]+)([.])([a-z]{2,20})(.[a-z]{2-8})?$/;
        if (regadd.test(add)) {
            document.getElementById("email-id").style.border = "2px solid green";
            return true;
        } else {
            document.getElementById("email-id").style.border = "2px solid red";
            return false;
        }
    }


    function validatephone() {
        //phone
        let phone = document.getElementById("mobno").value;
        let regphone = /^([7-9])([0-9]){9}$/;
        if (regphone.test(phone)) {
            document.getElementById("mobno").style.border = "2px solid green";
            return true;
        } else {
            document.getElementById("mobno").style.border = "2px solid red";
            return false;
        }
    }

    function validateQuery() {

        let lastname = document.getElementById("lname").value;
        let lastn = /^[a-zA-Z]{2,100}$/;
        if (lastn.test(lastname)) {
            document.getElementById("lname").style.border = "2px solid green";
            return true;
        } else {
            document.getElementById("lname").style.border = "2px solid red";
            return false;
        }

    }
}



// function scrollToTop() {
//     $(window).scrollTop(+1150);
// }

function scrollToTop(){
    window.scrollTo({
        top:+1150
    })
}

function scrollxyz() {
    window.scrollTo({
        top:0
    })
}



