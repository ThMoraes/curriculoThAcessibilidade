function abrirFecharMenu(){
    var str = document.getElementById("nomeBotaoMenu").innerHTML;
    var arr = str.split(" ");
    var res = arr[0];
    
    if( res == "menu_open"){
        var menu = document.getElementById('menu');
        menu.className = "menuMostrar";

        var conteudos = document.getElementById('conteudosInformacoes');
        conteudos.className = "conteudosOcultar";
        
        var nomebotaoMenu = document.getElementById('nomeBotaoMenu');
        nomebotaoMenu.innerHTML = "close";
        var botaoMenu = document.getElementById('botaoMenu');
        botaoMenu.className = "botaoMenuClose";
    }
    else if( res == "menu"){
        var menu = document.getElementById('menu');
        menu.className = "menuMostrar";

        var conteudos = document.getElementById('conteudosInformacoes');
        conteudos.className = "conteudosOcultar";
        
        var nomebotaoMenu = document.getElementById('nomeBotaoMenu');
        nomebotaoMenu.innerHTML = "close";
        var botaoMenu = document.getElementById('botaoMenu');
        botaoMenu.className = "botaoMenuClose";
    }
    else{
        var menu = document.getElementById('menu');
        menu.className = "menu";

        var conteudos = document.getElementById('conteudosInformacoes');
        conteudos.className = "conteudos";
        
        var nomebotaoMenu = document.getElementById('nomeBotaoMenu');
        nomebotaoMenu.innerHTML = "menu";
        var botaoMenu = document.getElementById('botaoMenu');
        botaoMenu.className = "botaoMenu";
    }
};

function mouseOver(){
    var str = document.getElementById("nomeBotaoMenu").innerHTML;
    var arr = str.split(" ");
    var res = arr[0];
    
    if( res == "menu"){
        var nomebotaoMenu = document.getElementById('nomeBotaoMenu');
        nomebotaoMenu.innerHTML = "menu_open";
        var botaoMenu = document.getElementById('botaoMenu');
        botaoMenu.className = "botaoMenuOver";
    }
}
function mouseOut(){
    var str = document.getElementById("nomeBotaoMenu").innerHTML;
    var arr = str.split(" ");
    var res = arr[0];
    
    if( res == "menu_open"){
        var nomebotaoMenu = document.getElementById('nomeBotaoMenu');
        nomebotaoMenu.innerHTML = "menu";
        var botaoMenu = document.getElementById('botaoMenu');
        botaoMenu.className = "botaoMenu";
    }
}


function acessibilidadeConteudo(){
    var str = document.getElementById("nomeBotaoAcessibilidade").innerHTML;
    var arr = str.split(" ");
    var res = arr[0];

    if( res == "settings_accessibility"){
        var nomebotaoAcessibilidade = document.getElementById('nomeBotaoAcessibilidade');
        nomebotaoAcessibilidade.innerHTML = "accessibility";
    
        var acessibilidade = document.getElementById('acessibilidade');
        acessibilidade.className = "acessibilidadeMostrar";
    
        var conteudos = document.getElementById('conteudosInformacoes');
        conteudos.className = "conteudosOcultar";
    
        var botaoAcessibilidade = document.getElementById('botaoAcessibilidade');
        botaoAcessibilidade.className = "botaoAcessibilidadeFechar";
    }
    else{
        var nomebotaoAcessibilidade = document.getElementById('nomeBotaoAcessibilidade');
        nomebotaoAcessibilidade.innerHTML = "settings_accessibility";
    
        var acessibilidade = document.getElementById('acessibilidade');
        acessibilidade.className = "acessibilidade";
    
        var conteudos = document.getElementById('conteudosInformacoes');
        conteudos.className = "conteudos";
    
        var botaoAcessibilidade = document.getElementById('botaoAcessibilidade');
        botaoAcessibilidade.className = "botaoAcessibilidade";
    }
};

function altoContraste(){
    var css = document.getElementById('css');
    css.href="altoContraste.css";
}


$('.conteudoNomeMenuConteudo').click(function(e){

    var menu = document.getElementById('menu');
    menu.className = "menu";

    var conteudos = document.getElementById('conteudosInformacoes');
    conteudos.className = "conteudos";

    var nomebotaoMenu = document.getElementById('nomeBotaoMenu');
    nomebotaoMenu.innerHTML = "menu";
    var botaoMenu = document.getElementById('botaoMenu');
    botaoMenu.className = "botaoMenu";

    
    /* Desabilita tag <a> */
    e.preventDefault();
    /* Variavel pra pegar o que tem dentro da tag <a> */
    var id = $(this).attr('href');
    /* Distância entre o conteúdo da tag <a> até o top */
    targetOffset = $(id).offset().top;
    /* Pegar a altura do menu */
    menuHeight = $('.topo').innerHeight();
    /* Animação */
    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    },/*velocidade da animação*/900);
});


$('#linkBotaoInicioConteudo').click(function(e){
    /* Desabilita tag <a> */
    e.preventDefault();
    /* Variavel pra pegar o que tem dentro da tag <a> */
    var id = $(this).attr('href');
    /* Distância entre o conteúdo da tag <a> até o top */
    targetOffset = $(id).offset().top;
    /* Pegar a altura do menu */
    menuHeight = $('.topo').innerHeight();
    /* Animação */
    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    },/*velocidade da animação*/900);
});


$('#menuConteudo1').hover(function(){
    $('#menuConteudo1 .conteudoNomeMenuConteudo').toggleClass('conteudoNomeMenuConteudoHover');
});
$('#menuConteudo2').hover(function(){
    $('#menuConteudo2 .conteudoNomeMenuConteudo').toggleClass('conteudoNomeMenuConteudoHover');
});
$('#menuConteudo3').hover(function(){
    $('#menuConteudo3 .conteudoNomeMenuConteudo').toggleClass('conteudoNomeMenuConteudoHover');
});
$('#menuConteudo4').hover(function(){
    $('#menuConteudo4 .conteudoNomeMenuConteudo').toggleClass('conteudoNomeMenuConteudoHover');
});
$('#menuConteudo5').hover(function(){
    $('#menuConteudo5 .conteudoNomeMenuConteudo').toggleClass('conteudoNomeMenuConteudoHover');
});
$('#menuConteudo6').hover(function(){
    $('#menuConteudo6 .conteudoNomeMenuConteudo').toggleClass('conteudoNomeMenuConteudoHover');
});
$('#menuConteudo7').hover(function(){
    $('#menuConteudo7 .conteudoNomeMenuConteudo').toggleClass('conteudoNomeMenuConteudoHover');
});
$('#menuConteudo8').hover(function(){
    $('#menuConteudo8 .conteudoNomeMenuConteudo').toggleClass('conteudoNomeMenuConteudoHover');
});
$('#menuConteudo9').hover(function(){
    $('#menuConteudo9 .conteudoNomeMenuConteudo').toggleClass('conteudoNomeMenuConteudoHover');
});
