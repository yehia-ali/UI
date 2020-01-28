// cheange mode page
var mode = 0;
$('.DarkMode').click(function () {
    if (mode == 0) {
        $("html").attr('mode', 'dark-mode');
        mode = 1;
    } else {
        $("html").attr('mode', '');
        mode = 0;
    }
});
// overflow hidden when click toggler
$('.navbar-toggler').click(function () {
    if (clicks == 0) {
        $("html ,body").css('overflow-y', 'hidden');
        clicks = 1;
    } else {
        $("html ,body").css('overflow-y', 'auto');
        clicks = 0;
    }
});