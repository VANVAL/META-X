
userisLogged();

$(document).ready(function () {
    $("body").on('click', '#btn1', function () {
        var userSign = $('#signUser').val();
        var passSign = $('#signPass').val();

        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(
            userSign, passSign).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });
    });


    

});

function userisLogged(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log("Usuario Activo");

        } else {
          // No user is signed in.
          console.log("Usuario inactivo");

        }
      });

}