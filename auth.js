const WEB_APP ='https://odonfack.helep24.com';

function onSignIn(googleUser) {
	debugger()
     var profile = googleUser.getBasicProfile();
     console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
     console.log('Name: ' + profile.getName());
     console.log('Image URL: ' + profile.getImageUrl());
     console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

     var id_token = googleUser.getAuthResponse().id_token;
     console.log('id_token: ', id_token);
     var xhr = new XMLHttpRequest();
     xhr.open('POST', WEB_APP+'/tokensignin');
     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
     xhr.onload = function() {
     console.log('Signed in as: ' + xhr.responseText);
     };
     xhr.send('idtoken=' + id_token);


     var myUserEntity = {};
     myUserEntity.Id = profile.getId();
     myUserEntity.Name = profile.getName();
     myUserEntity.email = profile.getEmail();
     //Store the entity object in sessionStorage where it will be accessible from all pages of your site.
     sessionStorage.setItem('myUserEntity',JSON.stringify(myUserEntity));
     alert(profile.getName());   
     // window.location.replace("https://9f88cb72.ngrok.io/sign");

}
;



function checkIfLoggedIn() {
     if(sessionStorage.getItem('myUserEntity') == null){
          //Redirect to login page, no user entity available in sessionStorage
          console.log('Not logged in');
          // window.location.href='sign.html';
     } else {
          //User already logged in
          var userEntity = {};
          userEntity = JSON.parse(sessionStorage.getItem('myUserEntity'));
          console.log('user_entity: ',userEntity );
          console.log('Not logged in');
     }
}
;