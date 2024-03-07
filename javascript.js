$(document).ready(function(){
    //$('body').html('Texte blalblallala');
    $('ul').html('<li>menu</li>')
    $('section:nth-child(2)');

    $('.footer').hide();
    $('img').css("height", "200px");


    $('ul').append('<li>li 1</li><br><li>li 2</li>');

    var a = $("article").find("a");
    a.attr({
        href: 'https://codeshare.io/openIt',
        target: '_blank'

    // Sélection de la liste du menu
    var menuList = $('ul');

    // Création des nouveaux éléments li
    var articlesLi = $('<li><a href="#articles">Articles</a></li>');
    var formulaireLi = $('<li><a href="#formulaire">Formulaire</a></li>');

    // Ajout des nouveaux éléments à la liste
    menuList.append(articlesLi);
    menuList.append(formulaireLi);
    
    });

    /*var article = $('section').children();
    var article = article.eq(1);
    article2.remove();

    function getDateDuJour(){
        var date = new Date();
        var jour = date.getDate();
        var mois = date.getMonth() + 1;
        var annee = date.getFullYear();
        var dateFormatee = (jour < 10 ? '0' : '') + jour + '/' + (mois < 10 ? '0' : '') + mois + '/' + annee;
        return dateFormatee;
    }
    var date = getDateDuJour();
    $(".footer").append("<p>Date du jour: " + date + "</p>");

    $("article img").click(function(){
        $(this).animate({
            opacity: 1,
            "height": "100px"}, 2000);
    });*/

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
