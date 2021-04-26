$(document).ready(function () {
    // fixed btn position
    // chatbot btn & chatbot wrap & top btn
    function fixed_btn() {
        var w_width = $(window).width();
        var w_scrollTop = $(window).scrollTop();
        var chatbtn = $(".btn_chatbot"); // chatbot btn
        var chatwrap = $(".chat_btn_wrap"); // chatbot input wrap
        var topbtn = $(".btn_top"); // btn top
        var conHei = $("#header").outerHeight() + $("#container").outerHeight() + $("#footer").outerHeight(); // wrap height
        var winHei = $(window).height(); // window height
        var btn_position = (conHei - winHei) - w_scrollTop;
        var chatwrap_position = btn_position + 114 - 135; // 


        // chrome, safari 
        var browser = navigator.userAgent.toLowerCase();
        if (browser.indexOf('safari') != -1) {
            if (ua.indexOf('chrome') > -1) {
                chatbtn.css("bottom", btn_position + 280); // iPad Chrome에서는 기존보다 +210
                chatwrap.css("bottom", btn_position + 280); // iPad Chrome에서는 기존보다 +210
            } else {
                chatbtn.css("bottom", btn_position + 280); // iPad Safari에서는 기존보다 +210
                chatwrap.css("bottom", btn_position + 280); // iPad Safari에서는 기존보다 +210
            }
        } else {
            chatbtn.css("bottom", btn_position + 280); // iPad 에서는 기존보다 +210
            chatwrap.css("bottom", btn_position + 280); // iPad 에서는 기존보다 +210
        }

        topbtn.css("bottom", btn_position - 100);
    }

    // window load chatbox
    load_chatbox();
    fixed_btn();
    header_load();
});


