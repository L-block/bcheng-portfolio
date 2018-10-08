(function () {
    //navigation
    $('.navitem').click(function () {
        var c = $(this);
        $('.navitem.current').removeClass('current');
        c.addClass('current');
        $('.section.current').removeClass('current');
        if (c.attr('id') === 'about-nav') {
            $('#about-content').addClass('current');
        } else if (c.attr('id') === 'portfolio-nav') {
            $('#portfolio-content').addClass('current');
        } else {
            $('#contact-content').addClass('current');
        }
    });
})();