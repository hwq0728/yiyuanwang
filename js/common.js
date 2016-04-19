$(function() {
    //导航定位
    if (location.pathname.lastIndexOf('/') !== location.pathname.length - 1) {
        addActive($('.navbar-nav.nav-yy'));
        addActive($('.nav-btn'));
    } else {
        $('.navbar-nav.nav-yy').find('a:first').parent().addClass("active");
    }

    function addActive($eles) {
        $eles.find('a').each(function(index, el) {
            var $self = $(this),
                path = location.pathname;
            $self.parent().removeClass('active');

            if (path.indexOf($self.attr('href')) > -1) {
                $self.parent().addClass('active');
            }
        });
    }
});
