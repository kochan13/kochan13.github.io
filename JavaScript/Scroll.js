$(document).ready(function() {
    $('.page-scroll').on('click', function(e) {
        var tujuan = $(this).attr('href');
        var elemenTujuan = $(tujuan);
        
        $('html, body').animate({
            scrollTop: elemenTujuan.offset().top - 60
        }, 1250, 'easeInOutExpo'); 
        e.preventDefault();
    });
});