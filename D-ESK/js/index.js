$(document).ready(function () {
    // tooltip
    $(".tooltip_txt").each(function () {
        $(this).tooltip({
            content: function () {
                return $(this).prop('title');
            },
            position: {
                my: "left top",
                at: "left bottom",
            }
        });
    })    

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


