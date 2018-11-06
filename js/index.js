userisLogged();

$(document).ready(function () {
    $("body").on('click', '#btn1', function () {
        var userSign = $('#signUser').val();
        var passSign = $('#signPass').val();


        firebase.auth().createUserWithEmailAndPassword(userSign, passSign)
            .then(function (response) {
                console.log("registrado");
                console.log(response.user.uid);
                firebase.database().ref("users").child(response.user.uid).set({
                    userName: userSign
                })
            })
            .catch(function (error) {
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

    //LOG IN
    $("body").on('click', '#btn2', function () {
        var userSign = $('#signUser').val();
        var passSign = $('#signPass').val();

        firebase.auth().signInWithEmailAndPassword(userSign, passSign)
            .then(function () {
                console.log("Te loggeaste uwu");
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                // [START_EXCLUDE]
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });
    });

});

function userisLogged() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            console.log("Usuario Activo");
            $(location).attr('href', 'mainMenu.html');

        } else {
            // No user is signed in.
            console.log("Usuario inactivo");
        }
    });
}