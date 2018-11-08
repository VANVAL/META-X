$(document).ready(function () {
    $("body").on('click', '#btn_more', function () {

        $("#btn_more").css("visibility", "hidden");
        $("#triangle-down").remove();

        $("#btn_less").css("visibility", "visible");
        $("#triangle-up").css("visibility", "visible");
        $("#showMore").append("<div id='triangle-up'></div>");

        $("body").empty();
        $("body").append(`
        <div id="rightContainer">
            <div id="menuContainer">
                <ul id="buttonsList">
                    <li>
                        <a href="mainMenu.html"><input class="button" type="button" value="BACK TO MENU"></a>
                    </li>
                </ul>
            </div>
        </div>
        <div id="mainBody">
            <div id='title'>
                <h1> EXORBITANT SCORES</h1>
            </div>

            <div id="extendedElements">
                <div class="filaBody">
                    <div class="bodyElement">
                        <img src="./img/avatarPlaceholder.png" alt="userPicture">
                        <p class="otherP">7,850 pts</p>
                        <p class="otherN">Fulano Zutano Mengano</p>
                    </div>
                
                    <div class="bodyElement">
                        <img src="./img/avatarPlaceholder.png" alt="userPicture">
                        <p class="otherP">Puntaje</p>
                        <p class="otherN">Fulano Zutano Mengano</p>
                    </div>
                    
                    <div class="bodyElement">
                        <img src="./img/avatarPlaceholder.png" alt="userPicture">
                        <p class="otherP">Puntaje</p>
                        <p class="otherN">Fulano Zutano Mengano</p>
                    </div>
                    
                    <div class="bodyElement">
                        <img src="./img/avatarPlaceholder.png" alt="userPicture">
                        <p class="otherP">Puntaje</p>
                        <p class="otherN">Fulano Zutano Mengano</p>
                    </div>
                    
                    <div class="bodyElement">
                        <img src="./img/avatarPlaceholder.png" alt="userPicture">
                        <p class="otherP">Puntaje</p>
                        <p class="otherN">Fulano Zutano Mengano</p>
                    </div>
                
                    <div class="bodyElement">
                        <img src="./img/avatarPlaceholder.png" alt="userPicture">
                        <p class="otherP">Puntaje</p>
                        <p class="otherN">Fulano Zutano Mengano</p>
                    </div>
                    
                    <div class="bodyElement">
                        <img src="./img/avatarPlaceholder.png" alt="userPicture">
                        <p class="otherP">Puntaje</p>
                        <p class="otherN">Fulano Zutano Mengano</p>
                    </div>
                    
                    <div class="bodyElement">
                        <img src="./img/avatarPlaceholder.png" alt="userPicture">
                        <p class="otherP">Puntaje</p>
                        <p class="otherN">Fulano Zutano Mengano</p>
                    </div>
                    
                    <div class="bodyElement">
                        <img src="./img/avatarPlaceholder.png" alt="userPicture">
                        <p class="otherP">Puntaje</p>
                        <p class="otherN">Fulano Zutano Mengano</p>
                    </div>
                    
                    <div class="bodyElement">
                        <img src="./img/avatarPlaceholder.png" alt="userPicture">
                        <p class="otherP">Puntaje</p>
                        <p class="otherN">Fulano Zutano Mengano</p>
                    </div>
                    
                    <div class="bodyElement">
                        <img src="./img/avatarPlaceholder.png" alt="userPicture">
                        <p class="otherP">Puntaje</p>
                        <p class="otherN">Fulano Zutano Mengano</p>
                    </div>
                
            </div>
        
        
            
            <div id="showMore">   
                    <div id="triangle-down"></div>
                    <div id="triangle-up"></div>
                    <button id="btn_more" class="button2">Show More</button>
                    <button id="btn_less" class="button2">Show Less</button>
            </div>
            
        </div>`);
    });

    $("body").on('click', '#btn_less', function () {

        $("#btn_less").css("visibility", "hidden");
        $("#triangle-up").remove();

        $("#btn_more").css("visibility", "visible");
        $("#showMore").prepend("<div id='triangle-down'></div>");
    });
});