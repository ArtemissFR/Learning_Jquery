$(document).ready(function(){
    $('ul').html('<li>MENU</li>')
    $('section:nth-child(2)');

    $('.footer1').hide();
    $('.footer2').hide();
    $('.footer3').hide();
    $('img').css("height", "200px");

    var articlesLi = $('<li><a href="#articles">Articles</a></li>');
    var formulaireLi = $('<li><a href="#formulaire">Formulaire</a></li>');
    $('ul').append(articlesLi, formulaireLi);

    var a = $("article").find("a");
    a.attr({
        href: 'https://codeshare.io/openIt',
        target: '_blank'
    
    });

// ------------------------------------------------------------------------------- BUTTON (En savoir plus) - Configuration -------------------------------------------------------------------------------

    var liens = [
        'https://www.toutelasignaletique.com/21347/chiffre-1-en-aluminium-2-dimensions-5-coloris.jpg',
        'https://media.istockphoto.com/id/968526968/photo/number-2-3d-clean-red-isolated-on-white.jpg?s=612x612&w=0&k=20&c=MVQ8sxh-xTje4v1N_6n2gZnEABVsCm_tIarVNtjPBpQ=',
        'https://www.toutelasignaletique.com/21357-thickbox_default/chiffre-3-en-alu-couleur-et-dimensions-au-choix.jpg'
    ];

    // Ajouter un bouton "En savoir plus" à la fin de l'article 1
    $('article').each(function (index) {
        var articleFooter = $(this).find('.footer1');
        var enSavoirPlusButton = $('<button class="en-savoir-plus" type="button">En savoir plus</button>');

        enSavoirPlusButton.click(function () {
            window.location.href = liens[index];
        });

        articleFooter.append(enSavoirPlusButton);
    });

    // Ajouter un bouton "En savoir plus" à la fin de l'article 2
    $('article').each(function (index) {
        var articleFooter = $(this).find('.footer2');
        var enSavoirPlusButton = $('<button class="en-savoir-plus" type="button">En savoir plus</button>');

        enSavoirPlusButton.click(function () {
            window.location.href = liens[index];
        });

        articleFooter.append(enSavoirPlusButton);
    });

    // Ajouter un bouton "En savoir plus" à la fin de l'article 3
    $('article').each(function (index) {
        var articleFooter = $(this).find('.footer3');
        var enSavoirPlusButton = $('<button class="en-savoir-plus" type="button">En savoir plus</button>');

        enSavoirPlusButton.click(function () {
            window.location.href = liens[index];
        });

        articleFooter.append(enSavoirPlusButton);
    });

// ------------------------------------------------------------------------------- BUTTON 1 - Configuration -------------------------------------------------------------------------------
    
    $('.button1').click(function () {
        var visibilite = $('.footer1').css('display');
        if (visibilite == "none") {
            $('.footer1').animate({
                opacity: 1,
                height: "toggle"
            }, 500, function () {
                $(this).css('display', 'block');
            });
            $(this).text("Afficher moins");
        } else {
            $(".footer1").animate({
                opacity: 0,
                height: "toggle"
            }, 500, function(){
                $(this).css('display', 'none');
            });
            $(this).text("Afficher plus");
        }
    });

// ------------------------------------------------------------------------------- BUTTON 2 - Configuration -------------------------------------------------------------------------------
    
    $('.button2').click(function () {
        var visibilite = $('.footer2').css('display');
        if (visibilite == "none") {
            $('.footer2').animate({
                opacity: 1,
                height: "toggle"
            }, 500, function () {
                $(this).css('display', 'block');
            });
            $(this).text("Afficher moins");
        } else {
            $(".footer2").animate({
                opacity: 0,
                height: "toggle"
            }, 500, function(){
                $(this).css('display', 'none');
            });
            $(this).text("Afficher plus");
        }
    });

// ------------------------------------------------------------------------------- BUTTON 3 - Configuration -------------------------------------------------------------------------------
    
    $('.button3').click(function () {
        var visibilite = $('.footer3').css('display');
        if (visibilite == "none") {
            $('.footer3').animate({
                opacity: 1,
                height: "toggle"
            }, 500, function () {
                $(this).css('display', 'block');
            });
            $(this).text("Afficher moins");
        } else {
            $(".footer3").animate({
                opacity: 0,
                height: "toggle"
            }, 500, function(){
                $(this).css('display', 'none');
            });
            $(this).text("Afficher plus");
        }
    });

    
});
