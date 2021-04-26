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


// ListSequence Toggle
function fn_TblToggle(obj) {
    if ($(obj).hasClass('active')) {
        $(obj).removeClass('active');
        $(obj).parent().next("tr").hide();
    }
    else {
        $(obj).addClass('active');
        $(obj).parent().next("tr").show();
    }
};

// top 버튼 클릭시 상단으로 이동
function scroll_top() {
    if ($(window).scrollTop() <= 1) {
        $(".btn_top").fadeOut("slow");
    }
    else {
        $(".btn_top").fadeIn("fast");
    }
};
