(function(){

    /* DOM elements */
    var container     = $( '#container' ),
        field         = $( '#playfield' ),
        player        = $( '#player' ),
        intro         = $( '#intro' ),
        isiform       = $( '#isiform' ),
        instructions  = $( '#instructions' ),
        pilihkarakter = $( '#pilih-karakter'),
        leftbutton    = $( '.left' ),
        rightbutton   = $( '.right' ),
        scoredisplay  = $( '#score output' ),
        energydisplay = $( '#energy output' ),
        nyawacontainer= $( '#energy ul'),
        canvas        = $( 'canvas' ),
        over          = $( '#gameover' ),
        rezachar      = $( '#reza-char' ),
        chelseachar   = $( '#chelsea-char' ),
        buttonplay    = $( '#playbutton' ),
        overmsg       = over.querySelector( '.message' ),
        characters    = document.querySelectorAll( 'li.introdeck' ),
        c             = canvas.getContext( '2d' ),
        startenergy   = +energydisplay.innerHTML;
        maxnyawa      = 3;

    /* Game data */
    var scores = { 
        energy: startenergy,
        score : 0
    },
    
    playerincrease = +player.getAttribute( 'data-increase' );

    /* counters, etc */
    var score = 0, 
        gamestate = null,
        charselected = null, 
        x = 0, 
        sprites = [], 
        allsprites = [],
        spritecount = 0, 
        now = 0, 
        old = null, 
        playerY = 0, 
        offset = 0,
        width = 0, 
        height = 0,
        levelincrease = 0, 
        i=0 , 
        storedscores = null,
        initsprites = 0, 
        newsprite = 500, 
        rightdown = false, 
        leftdown = false;

    /* media */
    var cendol1 = new Audio("audio/cendolsound.mp3");
    var cendol2 = new Audio("audio/cendolsound.mp3");
    var cendolsounds = [cendol1,cendol2];
    var bata1 = new Audio("audio/bata-aduh.mp3");
    var bata2 = new Audio("audio/bata-ouch.mp3");
    var bata3 = new Audio("audio/bata-aduh2.mp3");
    var bata4 = new Audio("audio/bata-aw.mp3");
    var batasoundschelsea = [bata1,bata2];
    var batasoundsreza = [bata3,bata4];
    var batasounds;

    var lifehpreza = new Audio("audio/lifehp-reza.mp3");
    var lifehpchelsea = new Audio("audio/lifehp-chelsea.mp3");
    var lifehp;

    var gameoversound2 = new Audio("audio/ending.mp3");
    gameoversound2.volume = 0.75;

    var gameoverbgm = new Audio("audio/bg-sound4.mp3");
    gameoverbgm.volume = 0.75;
    gameoverbgm.loop = true;

    var beep = new Audio("audio/beep.mp3");

    var bgmusic = new Audio("audio/bg-sound.mp3");
    bgmusic.loop = true;
    bgmusic.volume = 0.75;
    bgmusic.play();

    var bgmusic1 = new Audio("audio/bg-sound.mp3");
    bgmusic1.loop = true;
    bgmusic1.volume = 0.75; 

    var bgmusic2 = new Audio("audio/bg-sound2.mp3");
    bgmusic2.loop = true;
    bgmusic2.volume = 0.75;    

    var bgmusic3 = new Audio("audio/bg-sound3.mp3");
    bgmusic3.loop = true;
    bgmusic3.volume = 0.75;

    var bgmusic4 = new Audio("audio/bg-sound4.mp3");
    bgmusic4.loop = true;
    bgmusic4.volume = 0.75;    
    
    var rezaselected = new Audio("audio/haireza.mp3");
    var chelseaselected = new Audio("audio/haiakuchelsea.mp3");



    /* 
    Setting up the game
    */

    function init() {
        var current, sprdata, scoreinfo, i, j;

        /* retrieve sprite data from HTML */
        sprdata = document.querySelectorAll( 'img.sprite' );
        i = sprdata.length;
        while (i--) {
            current = {};
            current.effects = [];
            current.img = sprdata[ i ];
            current.offset = sprdata[ i ].offsetWidth / 2;
            scoreinfo = sprdata[ i ].getAttribute( 'data-collision' ).split(',');
            j = scoreinfo.length;
            while ( j-- ) {
                var keyval = scoreinfo[ j ].split( ':' );
                current.effects.push( {
                    effect: keyval[ 0 ],
                    value: parseInt(keyval[ 1 ])
                } );
            }
            current.type = sprdata[ i ].getAttribute ('data-type');
            current.frames = sprdata[ i ].getAttribute ('data-frames');
            allsprites.push( current );
        }

        spritecount = allsprites.length;
        initsprites = +$( '#characters' ).getAttribute( 'data-countstart' );
        newsprite = +$( '#characters' ).getAttribute( 'data-newsprite' );

        /* make game keyboard enabled */
        container.tabIndex = -1;
        container.focus();

        /* Assign event handlers */
        container.addEventListener( 'keydown', onkeydown, false );
        container.addEventListener( 'keyup', onkeyup, false );
        container.addEventListener( 'touchstart', ontouchstart, false );
        container.addEventListener( 'touchend', ontouchend, false );
        container.addEventListener( 'click', onclick, false );
        

        /* Get the game score, or preset it when there isn't any  */
        if( localStorage.html5catcher ) {
            storedscores = JSON.parse( localStorage.html5catcher );
        } else {
            storedscores = { last: 0, high: 0 };
            localStorage.html5catcher = JSON.stringify( storedscores );
        }
  
        /* show the intro */
        showintro();
    

    };

  
    /* Event Handlers */ 

    /* Click handling */ 
    function onclick( ev ) {
        var t = ev.target;
        if ( gamestate === 'gameover' ) {
            if ( t.id === 'replay' ) {
                beep.play(); 
                showintro(); 
            }
        }
        if ( t.className === 'next' ) { 
            instructionsnext(); 
        }
        if ( t.className === 'endinstructions' ) {
            instructionsdone(); 
        }
        if ( t.id === 'instructionbutton' ) {
            showinstructions(); 
        }
        if ( t.id === 'pilih-karakter-button' ) {
            showpilihkarakter();
            beep.play(); 
        }
        if ( t.id === 'playbutton' ) { 
            startgame(); 
            beep.play();
        }

        if ( t.id === 'isiformbutton' ) { 
            showisiform();
            beep.play();
        }

        if ( t.id === 'submitbutton' ) { 
            submitform();
            beep.play();
        }

        if ( t.id === 'reza-char-label'){
            rezachar.checked = true;
            rezaselected.play();
            charselected='reza';
            playbutton.disabled = false;
        }

        if ( t.id === 'chelsea-char-label'){
            chelseachar.checked = true;
            chelseaselected.play();
            charselected='chelsea';
            playbutton.disabled = false;
        }
        
        ev.preventDefault();
    }

    /* Keyboard handling */
    function onkeydown( ev ) {
        if ( ev.keyCode === 39 ) { 
            rightdown = true;
            hideTutorial() 
        }
        else if ( ev.keyCode === 37 ) {
            leftdown = true;
            hideTutorial() 
        }
    }

    function onkeyup( ev ) {
        if ( ev.keyCode === 39 ) {
            rightdown = false; 
            hideTutorial()
        }
        else if ( ev.keyCode === 37 ) { 
            leftdown = false; 
            hideTutorial()
        }
    }
  
    /* Touch handling */
    function ontouchstart( ev ) {
        if ( gamestate === 'playing' ) { 
            ev.preventDefault(); 
        }
        if ( ev.target === rightbutton ) { 
            rightdown = true; 
        }
        else if ( ev.target === leftbutton ) { 
            leftdown = true; 
        }
    }


    function ontouchend( ev ) {
        if ( gamestate === 'playing' ) {
            ev.preventDefault(); 
        }
        if ( ev.target === rightbutton ) {
            rightdown = false; 
        }
        else if ( ev.target === leftbutton ) {
            leftdown = false; 
        }
    }

    /* Mouse handling */
    function onmousemove ( ev ) {
        var mx = ev.clientX - container.offsetLeft;
        if ( mx < offset ) { mx = offset; }
        if ( mx > width-offset ) { mx = width-offset; }
        x = mx;
    }

    /* 
    Introduction
    */ 
    function showintro() {
        setcurrent( intro );
        gamestate = 'intro';
        rezachar.checked = false;
        chelseachar.checked = false;
        bgmusic.play();
        gameoverbgm.pause();
        bgmusic4.pause();
        bgmusic4.currentTime = 0;
        playbutton.disabled = true;
        var scoreelms = intro.querySelectorAll( 'output' );
        scoreelms[ 0 ].innerHTML = storedscores.last;
        scoreelms[ 1 ].innerHTML = storedscores.high;
        showTutorial()
    }

    /* 
    Introduction
    */ 
    function showpilihkarakter() {
        setcurrent( pilihkarakter );
        gamestate = 'pilih-karakter';
    }

    function showisiform() {
        setcurrent( isiform );
        document.getElementById("step1").style.display = 'block';
        document.getElementById("step2").style.display = 'none';
    }

    function hideTutorial() {
        document.getElementById("tutorial").style.display = 'none';
    }

    function showTutorial() {
        document.getElementById("tutorial").style.display = 'block';
    }

    function submitform() {
        document.getElementById("step1").style.display = 'none';
        document.getElementById("step2").style.display = 'block';
    }

    /*
    Start the game 
    */
    function startgame() {
        setcurrent( field );
        gamestate = 'playing';
        document.body.className = 'playing';
        if(charselected==='chelsea'){
            player.src="images/chelsea-figure.png";
            player.height=152;
            player.width=129;
            batasounds = batasoundschelsea;
            lifehp = lifehpchelsea;
        }
        else if(charselected==='reza'){
            player.src="images/reza-figure.png";
            player.height=164;
            player.width=120;
            batasounds = batasoundsreza;
            lifehp = lifehpreza;
        }
        width = field.offsetWidth;
        height = field.offsetHeight;
        canvas.width = width;
        canvas.height = height;
        playerY = height - player.offsetHeight; 
        offset = player.offsetWidth / 2; 
        x = width / 2;
        sprites = [];
        

        for ( i = 0; i < initsprites; i++ ) {
            sprites.push( addsprite(true) );
        }
        scores.energy = startenergy;
        scores.score = 0;
        levelincrease = 0;
        score = 0;
        energydisplay.innerHTML = startenergy;
        scoredisplay.innerHTML = scores.score;
        loop();
        bgmusic.pause();
        bgmusic.currentTime = 0;
        bgmusic2.play();
        cendol1.load();
        cendol2.load();
        bata1.load();
        bata2.load();
        lifehp.load();
        gameoversound2.load();
        gameoverbgm.load();
    }

    /* 
    The main game loop
    */
    function loop() {
        c.clearRect( 0, 0, width, height );

        /* render and update sprites */
        j = sprites.length;
        for ( i=0; i < j ; i++ ) {
            sprites[ i ].render(); 
            sprites[ i ].update();
        }

        /* show scores */
        energydisplay.innerHTML = scores.energy;
        scoredisplay.innerHTML = scores.score;
        //score++;

        if(scores.score >= 500 && scores.score < 1000){
            bgmusic2.pause();
            bgmusic2.currentTime = 0;
            bgmusic3.play();
        }
        else if (scores.score >= 1000  && scores.score < 1500){
            bgmusic3.pause();
            bgmusic3.currentTime = 0;
            bgmusic4.play();   
        }
        else if (scores.score >= 1500){
            bgmusic4.pause();
            bgmusic4.currentTime = 0;
            bgmusic1.play();   
        }

        var jumlahNyawa = scores.energy;
        var currNyawa = nyawacontainer.childNodes.length;
        var diffNyawa = jumlahNyawa - currNyawa;
        var li = document.createElement("LI");

        if (diffNyawa>0){
            while(diffNyawa--){
                nyawacontainer.appendChild(li);   
            }
        }
        else{
            diffNyawa = Math.abs(diffNyawa);

            while(diffNyawa--){
                if(typeof nyawacontainer.childNodes[0] != 'undefined'){
                    nyawacontainer.removeChild(nyawacontainer.childNodes[0]);    
                }
                else{
                    gameover();
                }
            }
        }

        /* with increasing score, add more sprites */
        if ( scores.score/newsprite > levelincrease ) {
            sprites.push( addsprite(false) );
            levelincrease++;
        } 

        /* position player*/
        if( rightdown ) { 
            playerright(); 
        }
        if( leftdown ) { 
            playerleft(); 
        }

        c.save(); 
        c.translate( x-offset, playerY );
        c.drawImage( player, 0, 0 );
        c.restore();

        /* when you still have energy, render next, else game over */
        scores.energy = Math.min( scores.energy, 3 );
        if ( scores.energy > 0 ) {
            requestAnimationFrame( loop );
        } 
        else {
            gameover();
        }
    };

    /* action when left is activated */
    function playerleft() {
        x -= playerincrease;
        if (x < offset) { x = offset; }
    }

    /* action when left is activated */
    function playerright() {
        x += playerincrease;
        if (x > width - offset) { x = width - offset; }
    }

    /* 
        Game over
    */
    function gameover() {
        document.body.className = 'gameover';
        setcurrent( over );
        gamestate = 'gameover';
        var nowscore =  scores.score;
        over.querySelector( 'output' ).innerHTML = nowscore;
        storedscores.last = nowscore;
        if ( nowscore > storedscores.high ) {
            overmsg.innerHTML = overmsg.getAttribute('data-highscore');
            storedscores.high = nowscore;
        }
        localStorage.html5catcher = JSON.stringify(storedscores);
        bgmusic2.pause();
        bgmusic2.currentTime = 0;
        bgmusic3.pause();
        bgmusic3.currentTime = 0;
        bgmusic4.pause();
        bgmusic4.currentTime = 0;
        bgmusic1.pause();
        bgmusic1.currentTime = 0;
        setTimeout(function(){ 
            gameoverbgm.play();
        }, 4000);
        gameoversound2.play();
        _gaq.push(['_trackEvent', 'cendolfactory', 'levelincrease', 'level_' + levelincrease]);
    }

    /* 
    Helper methods 
    */

    /* Particle system */
    function sprite() {
        this.px = 0; 
        this.py = 0; 
        this.vx = 0; 
        this.vy = 0; 
        this.goodguy = false;
        this.height = 0;
        this.width = 0;
        this.lebarAsli = 0;
        this.effects = [];
        this.img = null;
        this.frameIndex = 0;
        this.tickCount = 0;
        this.ticksPerFrame = 3;
        this.frames = null;
        this.update = function() {
            this.px += this.vx;
            this.py += this.vy;
            if ( ~~(this.py + 10) > playerY ) {
                if ( (x - offset) < this.px && this.px < (x + offset) ) {
                    this.py = -200;
                    i = this.effects.length;
                    if ( this.type === 'good' ) {
                        while ( i-- ) {
                            // ini kena cendol
                            scores[ this.effects[ i ].effect ] += this.effects[ i ].value;
                            cendolsounds[Math.floor(Math.random() * cendolsounds.length)].play();
                        }
                    }
                    else if (this.type === 'donat'){
                        while ( i-- ) {
                            // ini makan donat
                            if( this.effects[ i ].effect === 'energy' ){
                                scores[ this.effects[ i ].effect ] += this.effects[ i ].value;
                                lifehp.play();
                            }
                        }
                    }
                    else{
                        while ( i-- ) {
                            // ini kena bata
                            if( this.effects[ i ].effect === 'energy' ){
                                scores[ this.effects[ i ].effect ] += this.effects[ i ].value;
                                batasounds[Math.floor(Math.random() * batasounds.length)].play();
                            }
                        }
                    }
                }
            }

            this.tickCount += 1;

            if (this.tickCount > this.ticksPerFrame) {
        
                this.tickCount = 0;
                
                // Go to the next frame
                if (this.frameIndex < this.frames - 1){
                    this.frameIndex += 1; 
                }
                else{
                    this.frameIndex = 0;
                }
            }

            if ( this.px > (width - this.offset) || this.px < this.offset ) {
                this.vx = -this.vx;
            }

            if ( this.py > height + 100 ) {
                if ( this.type === 'good' ) {
                    i = this.effects.length;
                    while ( i-- ) {
                        //ini jatoh buat cendol ngurangin 1 nyawa aja
                        scores['energy']--;
                        //scores[ this.effects[ i ].effect ] -= +this.effects[ i ].value;
                        //ini biar looping sekali aja
                        break;
                    }
                }
                setspritedata( this, false );
            }
        };


        this.render = function() {
            c.save(); 
            c.translate( this.px, this.py );
            c.translate( this.width/this.frames * -0.5, this.height * -0.5 );
            // c.drawImage( this.img, 0, 0) ;
            // Draw the animation
            c.drawImage(
                this.img,
                this.frameIndex * this.width / this.frames,
                0,
                this.width / this.frames,
                this.height,
                0,
                0,
                this.width / this.frames,
                this.height);

            c.restore();
        };
    };

    function addsprite(noRandom) {
        var s = new sprite(); 
        setspritedata( s, noRandom );
        return s;
    };
  
    function setspritedata( sprite , noRandom) {
        if(noRandom)
            var r = spritecount-1;
        else
            var r = ~~rand( 0, spritecount );


        if(allsprites[ r ].type === 'donat' && (Math.min( scores.energy, 3 )) === maxnyawa )
        {
            return setspritedata(sprite);
        }

        sprite.img = allsprites[ r ].img;
        sprite.frames = allsprites[ r ].frames;
        sprite.height = sprite.img.offsetHeight;
        sprite.width = sprite.img.offsetWidth;
        sprite.type = allsprites[ r ].type;
        sprite.effects = allsprites[ r ].effects;
        sprite.offset = allsprites[ r ].offset;
        sprite.py = -100;

        sprite.lebarAsli = sprite.width/sprite.frames;

        sprite.px = rand( (0 + sprite.lebarAsli), (width - sprite.lebarAsli)  );
        sprite.vx = rand( -1, 2 );
        sprite.vy = rand( 1, 5 );
    };

    function $( str ) { 
        return document.querySelector( str );
    };

    function rand( min, max ) {
        return ( (Math.random() * (max-min)) + min ); 
    };

    function setcurrent(elm) {
        if (old) { 
            old.className = ''; 
        }
        elm.className = 'current';
        old = elm;
    };

    /* Detect and set requestAnimationFrame */
    if ( !window.requestAnimationFrame ) {
        window.requestAnimationFrame = (function() {
            return window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function( callback, element ) {
                window.setTimeout( callback, 1000 / 60 );
            };
        })();
    }

    /* off to the races */
    init();
})();