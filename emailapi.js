function valEmail()
    {
        var data = document.getElementById("email").value;

        var request = new XMLHttpRequest();
        request.withCredentials = true;

        request.open("GET", "https://mailcheck.p.rapidapi.com/?domain=mailinator.com");
        request.setRequestHeader("x-rapidapi-key", "ab9e5fe0cdmsh16c4c1ec11f8acbp1ac60bjsn827a0185b7ee");
        request.setRequestHeader("x-rapidapi-host", "mailcheck.p.rapidapi.com");

        request.readystatechange = function () {
            if (this.valid == true) {
                console.log('Email is valid');
            } else {
                console.log('Email is invalid');
                blockSubmit();
            }
        }
        request.send(data);
    }

    function blockSubmit()
    {
        document.getElementById("inv_email").style.display = "none";
        with (document.data) {
            document.getElementById("inv_email").style.display = "inline-block";
            email.focus();
        }
    }
