$( function () {
    var $btnScroll = $(".js-btn-scroll");

    if (!$btnScroll.length) {
        return
    }
    $btnScroll.click(function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#tests").offset().top
        }, 1000);
    });
});