window.fbAsyncInit = function() {
    FB.init({
      appId      : '267162127460018', //APP ID
      xfbml      : true,
      version    : 'v2.9'
    });
    FB.AppEvents.logPageView();
  };
  
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk')); 
  
  
  function shareScore(score) {
    FB.ui({
      method: 'share',
      href: 'https://meta-x.ga/', //URL del juego.
      hashtag: '#META-X',
      quote: 'My Exhorbitant Score: ' + score //
  
      //Usar API de inicio de sesion con facebook.
      //Api de facebook de juego online.
  
    }, function(respuesta){
    });
  }