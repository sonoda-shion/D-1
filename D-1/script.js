$(function() {
    $('.gBtn').click(function(){
        $(this).toggleClass('active');
    });


    $('.gBtn').click(function(){
        $(this).toggleClass('open')
        $('#gNav').toggleClass('open');
    })
})