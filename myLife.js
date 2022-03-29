$(window).ready(function () {
    $('.after-tree').hide();
    $('.after-cloud').hide();
    $('.after-cloud2').hide();
    $('.after-cloud3').hide();
    $('.after-flower').hide();
    $('.last').hide();
});
function missyou()
{
    $(".before").fadeOut(3000).promise().done(function(){
        var music=$('.song')[0];
        music.play();
        $(document.body).css("background","wheat");
        $('.after-tree').fadeIn(5000);
        $('.after-cloud').fadeIn(3000);
        $('.after-cloud2').fadeIn(3000);
        $('.after-cloud3').fadeIn(3000);
        $('.after-flower').fadeIn(7000).promise().done(function(){
            $('.last').fadeIn(3000);
        }
        )

})
}