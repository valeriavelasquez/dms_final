const emailresult = document.getElementById("emailresult");

function valEmail()
{
    var email = document.getElementById("email").value;
    
    console.log(email);
    
    const request = new XMLHttpRequest();
    request.withCredentials = true;

    request.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            // console.log(this.responseText);
            var json = JSON.parse(this.responseText);
            var isEmailValid = json["valid"];
            console.log(isEmailValid);
            
                if (isEmailValid == 1)
                {
                    emailresult.innerHTML = "This email is valid!"
                } else {
                    emailresult.innerHTML = "Please input a valid email!"
                }
            
            return isEmailValid;
        }
    });
    
    request.open("GET", "https://mailcheck.p.rapidapi.com/?domain=" + email);
    request.setRequestHeader("x-rapidapi-key", "ab9e5fe0cdmsh16c4c1ec11f8acbp1ac60bjsn827a0185b7ee");
    request.setRequestHeader("x-rapidapi-host", "mailcheck.p.rapidapi.com");

    request.send(email);
}
