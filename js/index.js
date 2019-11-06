$(document).ready(function() {

    $('.mini-product:nth-child(2)').hover(function() {
            var mini_img = $(this).attr('src');
            $('.big-product').css({ 'background-image': 'url(' + mini_img + ')' });

            $(this).addClass('cathead')


        },
        function() {

        });





});