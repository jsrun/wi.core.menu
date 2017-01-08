/**
 *  __          __  _    _____ _____  ______ 
 *  \ \        / / | |  |_   _|  __ \|  ____|
 *   \ \  /\  / /__| |__  | | | |  | | |__   
 *    \ \/  \/ / _ \ '_ \ | | | |  | |  __|  
 *     \  /\  /  __/ |_) || |_| |__| | |____ 
 *      \/  \/ \___|_.__/_____|_____/|______|
 *                                                                            
 *  @author André Ferreira <andrehrf@gmail.com>
 *  @license MIT
 */

"use strict";

(function(){
    $(".wi-btn-menu").click(function(e){
        e.preventDefault();
        e.stopPropagation();
        
        if($(this).hasClass("wi-btn-menu-active"))
            $(this).removeClass("wi-btn-menu-active");
        else
            $(this).addClass("wi-btn-menu-active");
        
        webide.navbar.clicked = false;
        $(".wi-navbar-clicked").removeClass("wi-navbar-clicked");
        $(".wi-navbar-item-selected").removeClass("wi-navbar-item-selected");
    });
    
    $("body").click(function(){
        $(".wi-btn-menu-active").removeClass("wi-btn-menu-active");
    });
})();