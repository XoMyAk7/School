$(document).ready(function () {
    $('ul.top_menu__links').on('click', 'li:not(.top_menu__active)', function() {
        $(this)
            .addClass('top_menu__active').siblings().removeClass('top_menu__active')
    });
})