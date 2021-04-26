$(document).ready(function () {
    $('.con_tab > li').click(function () {
        var activeTab = $(this).attr('rel');
        $('.con_tab > li').removeClass('active');
        $('.con_tab_box').removeClass('active');
        $(this).addClass('active');
        $('#' + activeTab).addClass('active');
        load_chatbox();
    });

    // Topic Toggle
    $('.rel_toggle').click(function () {
        if ($(this).find("span").hasClass('active')) {
            $(this).next().hide();
            $(this).find("span").text("토픽보기").removeClass('active');
        }
        else {
            $(".rel_topic_list").hide();
            $('.rel_toggle').find("span").text("토픽보기").removeClass('active');
            $(this).next().show();
            $(this).find("span").text("토픽접기").addClass('active');
        }
    });
});


