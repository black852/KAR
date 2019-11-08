$(document).ready(function() {

    $('.mini-product').hover(function() {


            var mini_img = $(this).attr('src');
            $('.big-product:eq()').css({ 'background-image': 'url(' + mini_img + ')' });

            $(this).css({ 'border-color': '#bbacfc' });

            $('.mini-product').not(this).css({ 'border-color': '#fff' });
        },
        function() {

        });




});