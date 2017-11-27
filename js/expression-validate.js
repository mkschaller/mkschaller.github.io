
     var $ = function(id){
        "use strict";
        return document.getElementById(id);
    };

    var error = document.getElementById("error");

    function firstCheck(){
        "use strict";
        var first = $("firstname").value;
        var testName = new RegExp("^[a-zA-Z]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z]*)*$");
        if(!testName.test(first)){
            error.innerHTML = "Names should only have text characters.";
            $("firstname").value = ""; // reset value if incorrect entry
        }
        else{
            error.innerHTML = "First name meets criteria.";
        }
    }

    function lastCheck(){
        "use strict";
        var last = $("lastname").value;
        var testName = new RegExp("^[a-zA-Z]+(([\'\,\.\-][a-zA-Z])?[a-zA-Z]*)*$");
        if(!testName.test(last)){
            error.innerHTML = "Names should only have text characters.";
            $("lastname").value = ""; // reset value if incorrect entry
        }else{
            error.innerHTML = "Last name meets criteria.";
        }

    }
    function emailCheck(){
        "use strict";
        var email = $("email").value;
        var testEmail = new RegExp("^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$");
        if(!testEmail.test(email)){
            error.innerHTML = "Emails should include an @ and domain.";
            $("email").value = ""; // reset value if incorrect entry
        }
        else{
            error.innerHTML = "Email meets criteria.";
        }
    }



    function phoneCheck(){
        "use strict";
        var phone = $("phone").value;
        var testPhone = new RegExp("^([\(]{1}[0-9]{3}[\)]{1}[ ]{1}[0-9]{3}[\-]{1}[0-9]{4})$");
        if(!testPhone.test(phone)){
            error.innerHTML="Please use the format (555) 555-5555";
            $("phone").value = "";
        }
        else{
            error.innerHTML = "Phone number meets criteria.";
        }


function phoneCheck(){
	"use strict";
    var phone = $("phone").value;
    var testPhone = new RegExp("^([\(]{1}[0-9]{3}[\)]{1}[ ]{1}[0-9]{3}[\-]{1}[0-9]{4})$");
    if(!testPhone.test(phone)){
        error.innerHTML="Please use the format (555) 555-5555";
        $("phone").value = "";
    }
    else{
        error.innerHTML = "Phone number meets criteria.";

    }

    function cellCheck(){
        "use strict";
        var cell = $("cell").value;
        var testCell = new RegExp("^([\(]{1}[0-9]{3}[\)]{1}[ ]{1}[0-9]{3}[\-]{1}[0-9]{4})$");
        if(!testCell.test(cell)){
            error.innerHTML="Please use the format (555) 555-5555";
            $("cell").value = "";
        }
        else{
            error.innerHTML = "Phone number meets criteria.";
        }


    }

    function zipCheck(){
        "use strict";
        var zip = $("zip").value;
        var testZIP = new RegExp("^[0-9]{5}$");
        if(!testZIP.test(zip)){
            error.innerHTML="Please enter a 5-digit US zipcode.";
            $("zip").value = "";
        }
        else{
            error.innerHTML = "Zipcode meets criteria.";
        }

    }


function cellCheck(){
	"use strict";
    var cell = $("cell").value;
    var testCell = new RegExp("^([\(]{1}[0-9]{3}[\)]{1}[ ]{1}[0-9]{3}[\-]{1}[0-9]{4})$");
    if(!testCell.test(cell)){
        error.innerHTML="Please use the format (555) 555-5555";
        $("cell").value = "";
    }
    else{
        error.innerHTML = "Phone number meets criteria.";
    }

}

function zipCheck(){
	"use strict";
    var zip = $("zip").value;
    var testZIP = new RegExp("^[0-9]{5}$");
    if(!testZIP.test(zip)){
        error.innerHTML="Please enter a 5-digit US zipcode.";
        $("zip").value = "";
    }
    else{
        error.innerHTML = "Zipcode meets criteria.";
    }

}
