$(document).ready(function(){
    var start =  $("#start");
    var end = $("#end");
    var jalan = $(".path");
    var gameStart = false;
    var cendol = 3;

    var BGM = new Howl({
        src: ['audio/bgm-maze.webm', 'audio/bgm-maze.mp3'],
        volume: 0.35,
        rate: 1,
        html5: true,
        loop: true,
        sprite: {
            introduction : [0, 176000],
            lose : [607000, 790000],
            win : [388000, 607000]
        }
    });

    var sfxClash = new Howl({src: ['audio/sfx-clash.wav']});
    var sfxZap = new Howl({src: ['audio/sfx-zap.wav']});
    var sfxOn = new Howl({src: ['audio/sfx-on.wav']});
    var sfxLose = new Howl({src: ['audio/sfx-lose.wav']});
    var sfxSucceed = new Howl({src: ['audio/sfx-succeed.wav']});
    var sfxClick = new Howl({src: ['audio/sfx-click.wav']});
    var sfxCarPurple = new Howl({src: ['audio/sfx-car-purple.wav']});
    var sfxNyungsep = new Howl({src: ['audio/sfx-nyungsep.wav']});
    var sfxMundur = new Howl({src: ['audio/sfx-mundur.wav']});
    var sfxBell = new Howl({src: ['audio/sfx-bell.wav']});

    var suaraKena = [sfxZap, sfxClash];

    BGM.play('introduction');

    // masuk ke starting point
    $(document).on('mouseenter', '#start', function(e) {
        $('.jsInstruction').fadeOut();
        setTimeout(function() {
            sfxOn.play();
            if(cendol == 3){
                $('.jsInstructionMan').hide();
                $('.jsInstructionBubble').hide();
                $('.jsInstructionPath').hide();
                $('.jsTriggerCarPurple').one('mousemove', function(e) { 
                    $('.jsObstacleCarPurple').addClass('is-moving');
                    sfxCarPurple.play(); 
                });

                $('.jsTriggerCarGreen').one('mousemove', function(e) { 
                    $('.jsObstacleCarGreen').addClass('is-reverse');
                    sfxMundur.play();  
                });

                $('.jsTriggerGerobak').one('mousemove', function(e) { 
                    $('.jsObstacleGerobak').addClass('is-nyungsep');
                    sfxBell.play(); 
                    setTimeout(function() {
                        sfxNyungsep.play(); 
                    }, 1500);   
                });
            }
            if(cendol == 2){
                BGM.rate(1.1);
            }
            if(cendol == 1){
                BGM.rate(1.2);   
            }
            gameStart = true;
            jalan.removeClass('is-disabled');
            $('.route').addClass('is-ready');
            $('.jsTiban').css('z-index', '50');
            start.removeClass('is-off');

            $("#status").text("Cemunggudh");
        }, 100);
    });

    var logoKahitna = "logo-kahitna.jpg";
    var logo90s = "logo-90s.jpg";
    var logoBarasuara = "logo-barasuara.jpg";
    var logoBurgerKill = "logo-burgerkill.jpg";
    var logoEk = "logo-ek.jpg";
    var logoPmr = "logo-pmr.jpg";
    var logoRocket = "logo-rocket.jpg";
    var logoSaykoji = "logo-saykoji.jpg";
    var logoSheila = "logo-sheila.jpg";
    var logoArtis1 = [logoBurgerKill, logoPmr, logoRocket, logoSheila];
    var logoArtis2 = [logoKahitna, logo90s, logoBarasuara, logoEk, logoSaykoji];

    $('.jsArtisBall1').on('animationiteration webkitAnimationIteration oanimationiteration MSAnimationIteration', function (e) {
         var artis1 = logoArtis1[Math.floor(Math.random()*logoArtis1.length)];
         $(this).css('background-image', 'url(images/' + artis1);
    }); 

    $('.jsArtisBall2').on('animationiteration webkitAnimationIteration oanimationiteration MSAnimationIteration', function (e) {
         var artis2 = logoArtis2[Math.floor(Math.random()*logoArtis2.length)];
         $(this).css('background-image', 'url(images/' + artis2);
    }); 

    // keluar jalur yang sudah ditetapkan
    $(document).on('mouseleave', '.route', function(e) {
        setTimeout(function() {
            kena();
        }, 150);
    });

    $(document).on('click', '.jsBtn', function(e) {
        sfxClick.play(); 
    });

    $(document).on('mouseenter', '#start__sign', function(e) {
        $('.jsInstruction').fadeOut();
    });

    // sampe ke tempat tujuan
    end.mousemove(function(){
        if(gameStart == true) {
            won();
        } 
        else if(gameStart && jalan.hasClass('is-disabled')){
            loss();  
        }  
    });

    function won(){
        gameStart = false;
        goToSection('win-screen');
        $('.jsSucceedSign').addClass('animated swing');
        BGM.stop();
        BGM.play('win');
        sfxSucceed.play();
    }

    function kena(){
        if(gameStart){
            gameStart = false;
            $("#status").text('cobalagi deh');
            jalan.addClass('is-disabled');
            start.addClass('is-off');
            $('.jsInstruction').fadeIn();
            $('.jsTiban').css('z-index', '24');
            suaraKena[Math.floor(Math.random()*suaraKena.length)].play();
            if (cendol > 1){
                cendol--;
                cendolisme(cendol);
            }
            else{
                goToSection('lose-screen');
                BGM.stop();
                BGM.play('lose');
                BGM.rate(1);
                sfxLose.play();
                $('.jsFailedSign').addClass('animated swing');
            }
        }
    }

    function loss(){
        if(gameStart){
            gameStart = false;
            jalan.addClass('is-disabled');
            start.addClass('is-off');
            $("#status").text('COPOOOOOOOO');
            // goToSection('game-screen');
        }
    } 

    function cendolisme(jumlahCendol){
        var cendolList = $('.jsCendolList');
        var cendolEmpty  = 3 - parseInt(jumlahCendol);
        var cendolIsi = 3 - parseInt(cendolEmpty);
        cendolList.empty();
        for (var i = 0; i < cendolEmpty; i++) { 
            cendolList.append( "<li class='c-cendol__item c-cendol__item--empty'></li>" );
        }
        for (var i = 0; i < cendolIsi; i++) { 
            cendolList.append( "<li class='c-cendol__item c-cendol__item--filled'></li>" );
        }
    }

    function hMinBerapa(){
        var satuHari = 24*60*60*1000;
        var hariIni = new Date();
        var hariMarkas = new Date(2017, 07, 26);
        var selisihHari = Math.round(Math.abs((hariMarkas.getTime() - hariIni.getTime())/(satuHari)));

        $('.jsHMin').text(selisihHari);
    }

    hMinBerapa();

});

function goToSection(section){
    var destination = $('.c-section--'+ section);
    $('.c-section').removeClass('is-current');
    $(destination).addClass('is-current');
    if(section == 'game'){
        setTimeout(function() {
            $('.jsInstructionPath').show();
        }, 1000);       
    }
}

function goToWebsite(){
    setTimeout(function() {
        window.location.href = 'https://markas.kaskus.co.id/home/ticket';
    }, 1000);    
}


