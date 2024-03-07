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

    // Ajouter un bouton "En savoir plus" à la fin de chaque article avec un lien différent
    $('article').each(function (index) {
        var articleFooter = $(this).find('.footer1');
        var enSavoirPlusButton = $('<button class="en-savoir-plus" type="button">En savoir plus</button>');

        enSavoirPlusButton.click(function () {
            window.location.href = liens[index];
        });

        articleFooter.append(enSavoirPlusButton);
    });

    // Ajouter un bouton "En savoir plus" à la fin de chaque article avec un lien différent
    $('article').each(function (index) {
        var articleFooter = $(this).find('.footer2');
        var enSavoirPlusButton = $('<button class="en-savoir-plus" type="button">En savoir plus</button>');

        enSavoirPlusButton.click(function () {
            window.location.href = liens[index];
        });

        articleFooter.append(enSavoirPlusButton);
    });

    // Ajouter un bouton "En savoir plus" à la fin de chaque article avec un lien différent
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

    
// ------------------------------------------------------------------------------- Code permettant d'enlever l'article 2 - Configuration -------------------------------------------------------------------------------

    // Sélectionner tous les articles
    var articles = $('article');

    // Supprimer le deuxième article
    if (articles.length >= 2) {
        articles.eq(1).remove();
    }

// ------------------------------------------------------------------------------- Ajout de la date du jour au Footer 1 - Configuration -------------------------------------------------------------------------------

    // Sélectionner le footer
    var footerdate = $('.footer1');

    // Ajouter la date du jour
    var today = new Date();
    var formattedDate = today.toLocaleDateString();
    footerdate.append('<p>Date du jour : ' + formattedDate + '</p>');

// ------------------------------------------------------------------------------- Agrandir réduire Image 1 - Configuration -------------------------------------------------------------------------------

    // Sélectionner l'image par son balise
    var image1 = $('.img1');

    // Taille initiale de l'image
    var tailleInitiale = 200;

    // Gérer le clic sur l'image
    image1.click(function () {
        // Obtenir la taille actuelle de l'image
        var tailleActuelle = image1.height();

        // Si la taille actuelle est la taille initiale, agrandir l'image
        // Sinon, réduire l'image à sa taille initiale
        if (tailleActuelle === tailleInitiale) {
            image1.animate({
                height: "400px", // Changer la taille d'agrandissement souhaitée
            }, 500);
        } else {
            image1.animate({
                height: tailleInitiale + "px",
            }, 500);
        }
    });

// ------------------------------------------------------------------------------- Agrandir réduire Image 2 - Configuration -------------------------------------------------------------------------------

    // Sélectionner l'image par son balise
    var image2 = $('.img2');

    // Taille initiale de l'image
    var tailleInitiale = 200;

    // Gérer le clic sur l'image
    image2.click(function () {
        // Obtenir la taille actuelle de l'image
        var tailleActuelle = image2.height();

        // Si la taille actuelle est la taille initiale, agrandir l'image
        // Sinon, réduire l'image à sa taille initiale
        if (tailleActuelle === tailleInitiale) {
            image2.animate({
                height: "400px", // Changer la taille d'agrandissement souhaitée
            }, 500);
        } else {
            image2.animate({
                height: tailleInitiale + "px",
            }, 500);
        }
    });

// ------------------------------------------------------------------------------- Agrandir réduire Image 3 - Configuration -------------------------------------------------------------------------------

    // Sélectionner l'image par son balise
    var image3 = $('.img3');

    // Taille initiale de l'image
    var tailleInitiale = 200;

    // Gérer le clic sur l'image
    image3.click(function () {
        // Obtenir la taille actuelle de l'image
        var tailleActuelle = image3.height();

        // Si la taille actuelle est la taille initiale, agrandir l'image
        // Sinon, réduire l'image à sa taille initiale
        if (tailleActuelle === tailleInitiale) {
            image3.animate({
                height: "400px", // Changer la taille d'agrandissement souhaitée
            }, 500);
        } else {
            image3.animate({
                height: tailleInitiale + "px",
            }, 500);
        }
    });

});
