function postComment() {
//find the form and stop it from refreshing. We only need it to submit contents onClick:
document.getElementById("comments-form").addEventListener('submit', function (event) { event.preventDefault(); });
if (sessionStorage.getItem('myUserEntity') != null) {

     console.log('Posting comment >>>>>>>>>>>>');
     console.log('PAGE_ID: ', window.location.pathname);
     console.log('USER_ID: ', JSON.parse(sessionStorage.getItem('myUserEntity')).Id);
     console.log('USER_NAME: ', JSON.parse(sessionStorage.getItem('myUserEntity')).Name);
     console.log('USER_COMMENT: ', document.getElementById("message").value);

     let config = {
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
     };
     
     let postCommentEndpoint = 'https://1y3mls9osl.execute-api.us-east-1.amazonaws.com/TEST/post-comment';
     let comment = {
          "PAGE_ID": window.location.pathname,
          "USER_ID": JSON.parse(sessionStorage.getItem('myUserEntity')).Id,
          "USER_NAME": JSON.parse(sessionStorage.getItem('myUserEntity')).Name,
          "USER_EMAIL": JSON.parse(sessionStorage.getItem('myUserEntity')).email,
          "USER_COMMENT": document.getElementById("message").value
     }
     
     
     if (document.getElementById("message").value != "") {
          //Send data to API Gateway
          axios.post(postCommentEndpoint, comment, config)
               .then(function (response) {
                    //reset the form contents:
                    document.getElementById("comments-form").reset();
                    window.location.reload(false)   ;
               })
               .catch(function (error) {
               console.log(error);
               });  

     } else {
          alert("Please enter your comment");
          console.log('No message');
     }
}
else {
     console.log('Not logged in');
     // window.location.href='sign.html';
     alert ("OhOoh! Akuma is our coding monkey 🐒  can't send your comment. You need to Sign In first.");
}
}
;