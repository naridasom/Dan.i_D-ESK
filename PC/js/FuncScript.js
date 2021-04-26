// Toggle
function fn_Toggle(obj) {
    if ($(obj).hasClass('active')) {
        $(obj).removeClass('active');
    }
    else {
        $(obj).addClass('active');
    }
}

// more class 관련 Toggle
function fn_MoreToggle(obj) {
    if ($(obj).hasClass('active')) {
        $(obj).next().hide();
        $(obj).removeClass('active');
    }
    else { 
        $(obj).next().show();
        $(obj).addClass('active');
        // 알림
        if ($(obj).hasClass("ico_noti")) {
            $(".noti_bg").show();
        } else if ($(obj).hasClass("profile")) {
            $(".noti_bg").show();
        }
    }
}

// tab 관련 Toggle
function fn_TabToggle(obj) {
    if ($(obj).hasClass('active')) {
        $(obj).siblings().removeClass("active");
    }
    else {
        $(obj).siblings().removeClass("active");
        $(obj).addClass('active');
    }
}

// ON & OFF Toggle
function fn_OnOff(obj) {
    if ($(obj).hasClass('active')) {
        $(obj).text('OFF').removeClass('active');
        $(obj).prev().removeClass('active');
    }
    else {
        $(obj).text('ON').addClass('active');
        $(obj).prev().addClass('active');
    }
}

// book 관련 Toggle
function fn_BookToggle(obj) {
    if ($(obj).hasClass('active')) {
        $(obj).next().hide();
        $(obj).removeClass('active');
    }
    else {
        $(".book_shortcut").removeClass('active');
        $(".book_pop_area").hide();
        $(obj).next().show();
        $(obj).addClass('active');
    }
}

// Inquiry Toggle
function fn_InquiryOpen(obj) {
    $(obj).next().show();
}

function fn_InquiryClose(obj) {
    $(obj).parents("tr").hide();

}

// 알림/프로필 팝업 창 닫기
function fn_NotiClose() {
    $(".noti_bg").hide();
    if ($(".ico_noti").hasClass("active")) {
        $(".ico_noti").removeClass("active");
        $(".noti_pop_area").hide();
    } else if ($(".profile").hasClass("active")) {
        $(".profile").removeClass("active");
        $(".profile_pop_area").hide();
    }
}

// 챗봇 입력 창 열기
function fn_Chatbot_Open(obj) {
    $(obj).parent().addClass("active");
}

// 챗봇 입력 창 닫기
function fn_Chatbot_Close() {
    $(".btn_chatbot").removeClass("active");
}

// 챗봇 팝업 창 열기
function fn_chat_pop_open(id) {
    $("#pop_" + id).show();
}

// 챗봇 팝업 창 닫기
function fn_chat_pop_close(id) {
    $("#pop_" + id).hide();
}

// filter area close
function fn_filterClose() {
    $(".ico_filter").removeClass("active");
    $(".filter_pop_area").hide();
}

// 셀렉트 새 창으로 열기
function go_url(url) {
    if (url != '') window.open(url, '_blank');
}

// top 버튼 클릭시 상단으로 이동
function scroll_top() {
    if ($(window).scrollTop() <= 1) {
        $(".btn_top").fadeOut("slow");
    }
    else {
        $(".btn_top").fadeIn("fast");
    }
};