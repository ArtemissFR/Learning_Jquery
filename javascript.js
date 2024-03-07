$(document).ready(function(){
    $('ul').html('<li>MENU</li>')
    $('section:nth-child(2)');

    $('.footer').hide();
    $('img').css("height", "200px");

    var articlesLi = $('<li><a href="#articles">Articles</a></li>');
    var formulaireLi = $('<li><a href="#formulaire">Formulaire</a></li>');
    $('ul').append(articlesLi, formulaireLi);
 //   $('ul').append('<li>li 1</li><br><li>li 2</li>');

    var a = $("article").find("a");
    a.attr({
        href: 'https://codeshare.io/openIt',
        target: '_blank'
    
    });


    $('.button1').click(function () {
        var visibilite = $('.footer').css('display');
        if (visibilite == "none") {
            $('.footer').animate({
                opacity: 1,
                height: "toggle"
            }, 500, function () {
                $(this).css('display', 'block');
            });
            $(this).text("Afficher moins");
        } else {
            $(".footer").animate({
                opacity: 0,
                height: "toggle"
            }, 500, function(){
                $(this).css('display', 'none');
            });
            $(this).text("Afficher plus");
        }
    });
});
