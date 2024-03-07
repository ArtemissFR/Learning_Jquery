$(document).ready(function(){
    $('ul').html('<li>MENU</li>')
    $('section:nth-child(2)');

    $('.footer').hide();
    $('img').css("height", "200px");

    var articlesLi = $('<li><a href="#articles">Articles</a></li>');
    var formulaireLi = $('<li><a href="#formulaire">Formulaire</a></li>');
    $('ul').append(articlesLi, formulaireLi);

    var a = $("article").find("a");
    a.attr({
        href: 'https://codeshare.io/openIt',
        target: '_blank'
    
    });

    var liens = [
        'https://www.toutelasignaletique.com/21347/chiffre-1-en-aluminium-2-dimensions-5-coloris.jpg',
        'https://media.istockphoto.com/id/968526968/photo/number-2-3d-clean-red-isolated-on-white.jpg?s=612x612&w=0&k=20&c=MVQ8sxh-xTje4v1N_6n2gZnEABVsCm_tIarVNtjPBpQ=',
        'https://www.toutelasignaletique.com/21357-thickbox_default/chiffre-3-en-alu-couleur-et-dimensions-au-choix.jpg'
    ];

    // Ajouter un bouton "En savoir plus" à la fin de chaque article avec un lien différent
    $('article').each(function (index) {
        var articleFooter = $(this).find('.footer');
        var enSavoirPlusButton = $('<button class="en-savoir-plus" type="button">En savoir plus</button>');

        enSavoirPlusButton.click(function () {
            window.location.href = liens[index];
        });

        articleFooter.append(enSavoirPlusButton);
    });

// ------------------------------------------------------------------------------- BUTTON 1 - Configuration -------------------------------------------------------------------------------
    
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

// ------------------------------------------------------------------------------- BUTTON 2 - Configuration -------------------------------------------------------------------------------
    
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

// ------------------------------------------------------------------------------- BUTTON 3 - Configuration -------------------------------------------------------------------------------
    
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
