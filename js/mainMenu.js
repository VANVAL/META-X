userisLogged();

$(document).ready(function(){
    $("body").on('click', '#btn_logout', function () {
        firebase.auth().signOut().then(function () {})
            .catch(function (error) {
                console.log(error);
            });
         $(location).attr('href', 'index.html');
    });

    $("body").on('click', '#btn_start', function (){
        $(location).attr('href', 'game.html');
    });

    $("body").on('click', '#btn_scores', function (){
        $(location).attr('href', 'score.html');
    });

    $("body").on('click', '#btn_options', function (){
        $(location).attr('href', 'options.html');
    });
});

function userisLogged() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            console.log("Usuario Activo");

        } else {
            // No user is signed in.
            console.log("Usuario inactivo");
        }
    });
}