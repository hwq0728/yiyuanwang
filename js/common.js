$(function () {
    //导航定位
    if (location.pathname.lastIndexOf('/') !== location.pathname.length - 1) {
        $('#navbar-yy').find('a').each(function () {
            var $self = $(this),
                path = location.pathname;
            $self.parent().removeClass('selected');

            if (path.indexOf($self.attr('href')) > -1) {
                $self.parent().addClass('selected');
            }
        });
    }
});