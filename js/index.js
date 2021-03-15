$(document).ready(function () {
    // modal custom
    $('.modal').on('shown.bs.modal', function (e) {
        //alert("팝업 오픈");        
    })

    $('.modal').on('hidden.bs.modal', function (e) {
        //alert("팝업 닫힘");
    });

    // tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // tooltip sm custom
    $('.tooltip_sm').on('shown.bs.tooltip', function () {
        $(".tooltip").addClass("tooltip-sm");
    })

    $('.tooltip_sm').on('hidden.bs.tooltip', function () {
        $(".tooltip").removeClass("tooltip-sm");
    })

    $(window).scroll(function () {
        var lScroll = $(this).scrollLeft();
        $("#header").css('left', -lScroll);
    });


    function header_load() {
        var w_width = $(window).width();
        var sL = $(window).scrollLeft();
        var val = $("#header").offset().left;

        // 1241 해상도
        if (w_width > 1241) {
            $("#header").css('left', '0');
        }
        // 0 ~ 1240 해상도
        else {
            $("#header").css('left', -sL);
        }
    }

    header_load();

    // 스크롤 여부에 따라 top 버튼 생성
    $(window).scroll(function () {
        setTimeout(scroll_top, 0);//화살표가 반응하여 생기는 시간
    });

    $(".btn_top").click(function () {
        $("body").animate({ scrollTop: 0 }, 400);//화살표 클릭시 화면 스크롤 속도
        return false;
    });

    // 스크롤이 멈추면 5초 후 top 버튼 숨기기
    $.fn.scrollStopped = function (callback) {
        var that = this, $this = $(that);
        $this.scroll(function (ev) {
            clearTimeout($this.data('scrollTimeout'));
            $this.data('scrollTimeout', setTimeout(callback.bind(that), 3000, ev));
        });
    };

    $(window).scrollStopped(function () {
        $(".btn_top").fadeOut("slow");
    });

    // Tab
    $('.con_tab > li').click(function () {
        var activeTab = $(this).attr('rel');
        $('.con_tab > li').removeClass('active');
        $('.con_tab_box').removeClass('active');
        $(this).addClass('active');
        $('#' + activeTab).addClass('active');
        load_chatbox();
    });

    // Topic Toggle
    $('.topic_btn').click(function () {
        if ($(this).find("strong").hasClass('active')) {
            $(this).parent().next().hide();
            $(this).find("strong").text("토픽보기").removeClass('active');
        }
        else {
            // $(".topic_list").hide();
            // $(".topic_list_wrap").hide();
            $(this).find("strong").text("토픽보기").removeClass('active');
            $(this).parent().next().show();
            $(this).find("strong").text("토픽접기").addClass('active');
        }
    });

    // Topic Toggle
    $('.topic_recruit_btn').click(function () {
        if ($(this).find("strong").hasClass('active')) {
            $(this).parent().next().hide();
            $(this).find("strong").removeClass('active');
        }
        else {
            $(this).find("strong").removeClass('active');
            $(this).parent().next().show();
            $(this).find("strong").addClass('active');
        }
    });

    // Tbl Topic Toggle
    $('.icon_tbl_toggle').click(function () {
        if ($(this).hasClass('active')) {
            $(this).parents("tr").next().hide();
            $(this).text("토픽보기").removeClass('active');
        }
        else {
            $(".tbl_topic_area").hide();
            $('.icon_tbl_toggle').text("토픽보기").removeClass('active');
            $(this).parents("tr").next().show();
            $(this).text("토픽접기").addClass('active');
        }
    });

    // 필터 영역 이외의 영역 클릭시 필터 영역 닫기
    $(document).mouseup(function (e) {
        var ico_filter = $(".btn_select");
        var filterPopup = $(".filter_wrap");
        if (filterPopup.has(e.target).length === 0) {
            ico_filter.removeClass("active").next().hide();
        }
    });

    $(document).on('click', 'a.filter_tit[href^="#"]', function (event) {
        event.preventDefault();

        //alert($($.attr(this, 'href')).offset().top + 152);
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 172
        }, 500);
    });

    // modal backdrop multiple issue
    $(document).on('show.bs.modal', '.modal', function (event) {
        var zIndex = 1040 + (10 * $('.modal:visible').length);
        $(this).css('z-index', zIndex);
        setTimeout(function () {
            $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
        }, 0);
    });
    
});


