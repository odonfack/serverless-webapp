function submitToAPI(e) {
e.preventDefault();
var URL = "https://qaqoj1nnc5.execute-api.us-east-1.amazonaws.com/live/contact-form";

     var Namere = /[A-Za-z]{1}[A-Za-z]/;
     if (!Namere.test($("#name-input").val())) {
                    alert ("Name can not less than 2 char :)");
          return;
     }
     // var mobilere = /[0-9]{10}/;
     // if (!mobilere.test($("#phone-input").val())) {
     //     alert ("Please enter valid mobile number");
     //     return;
     // }
     if ($("#email-input").val()=="") {
          alert ("Please enter your email id");
          return;
     }

     var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
     if (!reeamil.test($("#email-input").val())) {
          alert ("Please enter valid email address");
          return;
     }

var name = $("#name-input").val();
//    var phone = $("#phone-input").val();
var email = $("#email-input").val();
var subject = $("#subject-input").val();
var message = $("#message-input").val();

var data = {
     name : name,
     subject : subject,
     email : email,
     message : message
};

console.log(data);
console.log(JSON.stringify(data));

$.ajax({
     type: "POST",
     url: "https://qaqoj1nnc5.execute-api.us-east-1.amazonaws.com/live/contact-form",

     dataType: "json",
     crossDomain: "true",
     contentType: "application/json; charset=utf-8",

     data: JSON.stringify(data),

     success: function (xhr) {
     // clear form and show a success message
     alert("Your message have been successfully send! Our coding monkeys 🙈🐒🐒 will contact you as soon!");
     document.getElementById("contact-form").reset();
location.reload();
     },
//   error: function () {
//     // show an error message
//     alert("Our coding monkeys 🙈🐒🐒 will contact you as soon as they finish poopooing this Java script!");
//     }
     error: function (xhr) {
     var err = JSON.parse(xhr.responseText);
     alert(err.message);
     }
});

}