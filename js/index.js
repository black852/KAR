$(document).ready(function() {

    $('.mini-product').hover(function() {


            var mini_img = $(this).attr('src');


            $('.big-product').css({ 'background-image': 'url(' + mini_img + ')' });

            $(this).css({ 'border-color': '#bbacfc' });

            $('.mini-product').not(this).css({ 'border-color': '#fff' });

            var x = $(this).index();
            if (x == 1) {
                $('.product-textbox>h3').text("유명");
                $('.product-textbox>p').text("  세련된 색감의 세련된 색감의 롱으로 유명 색감에 맞게 묵직 세련된 색감의 ");

            } else if (x == 2) {
                $('.product-textbox>h3').text("맞묵직세");
                $('.product-textbox>p').text("애인의집을가기위해서버스를타려고한당신은버스가눈앞에서떠나버렸다면어떻게하실생각인가");
            } else if (x == 3) {
                $('.product-textbox>h3').text("가기위");
                $('.product-textbox>p').text("그래도 맑은 심성을 가진 할아버지는 투정하지 않았어요");
            } else if (x == 4) {
                $('.product-textbox>h3').text("않는다면");
                $('.product-textbox>p').text("심지어 시도했으나 무엇도 제대로 해내지 못했을 때조차도 성장한다");
            } else {
                $('.product-textbox>h3').text("이 나는");
                $('.product-textbox>p').text("톤다운된 세련된 색감의 마카롱으로 유명한 곳. 색감에 맞게 묵직한 맛이 나는 필링이 ");
            }

        },
        function() {

        });
    $('.mini-product').on('click', function() {
        var mini_img = $(this).attr('src');

        var x = $(this).index();
        $('.lightbox').show();
        for (var i = 0; i <= 4; i++) {
            var cake = mini_img.replace(/0.jpg/, i + ".jpg");

            $('.lightbox img:eq(' + i + ')').attr('src', cake);

        }




    });
    $('.lightbox button').on('click', function() {
        $('.lightbox').hide();
    });



});