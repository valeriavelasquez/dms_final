function validate()
        {
            
            err = false;
            document.getElementById("err_fname").style.display = "none";
            document.getElementById("err_lname").style.display = "none";
            document.getElementById("err_email").style.display = "none";
            document.getElementById("err_age").style.display = "none";
            document.getElementById("err_age_young").style.display = "none";
            document.getElementById("err_age_old").style.display = "none";
            
            with (document.data) {
                if (fname.value == ""){
                    document.getElementById("err_fname").style.display = "inline-block";
				    fname.focus();
				    err=true;
                }
                
                if (lname.value == "") {
                    document.getElementById("err_lname").style.display = "inline-block";
                    lname.focus();
                    err=true;
                }
                
                if (email.value == "") {
                    document.getElementById("err_email").style.display = "inline-block";
                    email.focus();
                    err=true;
                }
                
                if (age.value == "") {
                    document.getElementById("err_age").style.display = "inline-block";
                    age.focus();
                    err=true;
                }
                
                if (age.value > 0 && age.value <= 13) {
                    document.getElementById("err_age_young").style.display = "inline-block";
                    age.focus();
                    err=true;
                }
                
                if (age.value >= 123) {
                    document.getElementById("err_age_old").style.display = "inline-block";
                    age.focus();
                    err=true;
                }
            }
		
            return !err;
	}
