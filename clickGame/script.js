$( document ).ready(function() {

//--- Button begining ---
$('#start').on('click', function(){
 $('#start').remove();
 $('.instructions').show();
$('#continue').show();
});


//--- button continue ---
let continu = $('#continue');
continu.on('click', function(){
$('.instructions').remove();
$('.instructions1').show();
});

$('#refresh').on('click', function(){
  location.reload();
})

//--- Countdown seconds ---
var seconds = 103;


//--- button start game ---
$('#game').on('click', function(){
  $('.instructions1').remove();
  $('.settings').css({'transition':'4s','height':'100px'});
  $('.side_info').css({'transition':'4s','width':'120px'});
  $('#level1').css({'transition':'4s','background-image':'url(images/woods.jpg)'});
  $('.element').show();
  $('.all1').show();
  $('.all1').css({'transition':'6s','opacity':'0.3'});

//--- function starts countdown ---
  function tick() {
var counter = $('#timer');
seconds--;
counter.html(seconds);
if( seconds > 0 ) {
    setTimeout(tick, 1000);
  }else if(seconds<=0){
    counter.html("You lose");
    move($('.all1'));
    $('#refresh').show();
    $('#container2').show();
  }
}
tick();
});

$('#game2').on('click', function(){
  $('.instructions1').remove();
  $('.settings').css({'transition':'4s','height':'100px'});
  $('.side_info').css({'transition':'4s','width':'120px'});
  $('#level2').css({'transition':'4s','background-image':'url(images/castle.jpg)'});
  $('.element').show();
  $('.all2').show();
  $('.all2').css({'transition':'8s','opacity':'0.4'});
  $('#container2').css({'transition':'8s','opacity':'0.4'});
//--- function starts countdown ---
  function tick() {
var counter = $('#timer2');
seconds--;
counter.html(seconds);
if( seconds > 0 ) {
    setTimeout(tick, 1000);
  }else if(seconds<=0){
    counter.html("You lose");
    moveTwo($('.all2'));
    $('#refresh').show();
  }
}
tick();
});




//--- Showes hint each element name on top LEVEL1---

$("#butter").on('click', function(){
$('#butterfly').css({'transition':'0.2','transform':'rotate(380deg)'});
$('#butterfly').css('opacity','0.5');
});
$("#knif").on('click', function(){
$('#knife').css({'transition':'0.2','transform':'rotate(320deg)'});
$('#knife').css('opacity','0.5');
});
$("#rop").on('click', function(){
$('#rope').css({'transition':'0.2','transform':'rotate(360deg)'});
$('#rope').css('opacity','0.5');
});
$("#buk").on('click', function(){
$('#book').css({'transition':'0.2','transform':'rotate(360deg)'});
$('#book').css('opacity','0.5');
});
$("#candl").on('click', function(){
$('#candle').css({'transition':'0.2','transform':'rotate(360deg)'});
$('#candle').css('opacity','0.5');
});
$("#appl").on('click', function(){
$('#apple').css({'transition':'0.2','transform':'rotate(360deg)'});
$('#apple').css('opacity','0.5');
});
$("#mun").on('click', function(){
$('#moon').css({'transition':'0.2','transform':'rotate(360deg)'});
$('#moon').css('opacity','0.5');
});
$("#con").on('click', function(){
$('#coin').css({'transition':'0.2','transform':'rotate(360deg)'});
$('#coin').css('opacity','0.5');
});
$("#ax").on('click', function(){
$('#axe').css({'transition':'0.2','transform':'rotate(300deg)'});
$('#axe').css('opacity','0.5');
});
$("#snouw").on('click', function(){
$('#snow').css({'transition':'0.2','transform':'rotate(360deg)'});
$('#snow').css('opacity','0.8');
});
$("#forck").on('click', function(){
$('#fork').css({'transition':'0.2','transform':'rotate(300deg)'});
$('#fork').css('opacity','0.5');
});
$("#feathr").on('click', function(){
$('#feather').css({'transition':'0.2','transform':'rotate(360deg)'});
$('#feather').css('opacity','0.5');
});

//--- Showes hint each element name on top LEVEL2 ---

$("#candlestck").on('click', function(){
$('#candlestick').css({'transition':'0.2','transform':'rotate(380deg)'});
$('#candlestick').css('opacity','0.5');
});
$("#kee").on('click', function(){
$('#key').css({'transition':'0.2','transform':'rotate(320deg)'});
$('#key').css('opacity','0.5');
});
$("#swrd").on('click', function(){
$('#sword').css({'transition':'0.2','transform':'rotate(360deg)'});
$('#sword').css('opacity','0.5');
});
$("#gm").on('click', function(){
$('#gem').css({'transition':'0.2','transform':'rotate(360deg)'});
$('#gem').css('opacity','0.5');
});
$("#ptchr").on('click', function(){
$('#pitcher').css({'transition':'0.2','transform':'rotate(360deg)'});
$('#pitcher').css('opacity','0.5');
});
$("#shild").on('click', function(){
$('#crown').css({'transition':'0.2','transform':'rotate(360deg)'});
$('#crown').css('opacity','0.5');
});
$("#snak").on('click', function(){
$('#snake').css({'transition':'0.2','transform':'rotate(360deg)'});
$('#snake').css('opacity','0.5');
});
$("#brum").on('click', function(){
$('#broom').css({'transition':'0.2','transform':'rotate(360deg)'});
$('#broom').css('opacity','0.5');
});
$("#cros").on('click', function(){
$('#cross').css({'transition':'0.2','transform':'rotate(300deg)'});
$('#cross').css('opacity','0.5');
});
$("#ravn").on('click', function(){
$('#raven').css({'transition':'0.2','transform':'rotate(360deg)'});
$('#raven').css('opacity','0.8');
});
$("#ht").on('click', function(){
$('#hat').css({'transition':'0.2','transform':'rotate(300deg)'});
$('#hat').css('opacity','0.5');
});
$("#tscope").on('click', function(){
$('#telescope').css({'transition':'0.2','transform':'rotate(360deg)'});
$('#telescope').css('opacity','0.5');
});

//--- Counter for the elements clicked---
counter=11;
$('#left').html(12);

//--- Moves the elements clicked to a diff area ---
function move(e){
e.css({'opacity':'1','transition':'0.1s', 'transform':'rotate(360deg)'});
e.css({'top':'44%','left':'94%','transition':'3s'})
};

//--- Sound Effect on Clicked Elements---
function sound() {
  var first=$('.sound').trigger('play');
  if(first[0].currentTime>0){
  $('.dust').trigger('play');
  }else{
    first;
  }
}

//--- All elements on click:
function all(){

$('#butterfly').on('click', function(){
move($('#butterfly'));
sound();
$('#count').css({'transition':'2s','background-image':'url(images/butterfly.png)', 'background-position':'center', 'background-size':'80%', 'background-repeat':'no-repeat'});
$('#butter').css({'text-decoration':'line-through'})
$('#left').html(counter--);
if(counter<0){
 $('#left').text("Great Job!");
 $('#container').css({'opacity':'0','transition':'3s'});
$('#timer').attr('id', 'win');
$('#win').html("You found all the elements!");
$('.forward').show();
$('.forward').css({'opacity':'1','transition':'3s'});
$('.instructions2').show();
$('#refresh').remove();
}
});

$('#candle').on('click', function(){
move($('#candle'));
sound();
$('#candl').css({'text-decoration':'line-through'})
$('#count').css({'transition':'2s','background-image':'url(images/candle.png)', 'background-position':'center', 'background-size':'55%', 'background-repeat':'no-repeat'});
$('#left').html(counter--);
if(counter<0){
 $('#left').text("Great Job!");
 $('#container').css({'opacity':'0','transition':'3s'});
$('#timer').attr('id', 'win');
$('#win').html("You found all the elements!");
$('.forward').show();
$('.forward').css({'opacity':'1','transition':'3s'});
$('.instructions2').show();
$('#refresh').remove();
}
});

$('#moon').on('click', function(){
move($('#moon'));
sound();
$('#mun').css({'text-decoration':'line-through'})
$('#count').css({'transition':'2s','background-image':'url(images/moon.png)', 'background-position':'center', 'background-size':'80%', 'background-repeat':'no-repeat'});
$('#left').html(counter--);
if(counter<0){
 $('#left').text("Great Job!");
 $('#container').css({'opacity':'0','transition':'3s'});
$('#timer').attr('id', 'win');
$('#win').html("You found all the elements!");
$('.forward').show();
$('.forward').css({'opacity':'1','transition':'3s'});
$('.instructions2').show();
$('#refresh').remove();
}
});

$('#rope').on('click', function(){
move($('#rope'));
sound();
$('#rop').css({'text-decoration':'line-through'})
$('#count').css({'transition':'2s','background-image':'url(images/rope.png)', 'background-position':'center', 'background-size':'80%', 'background-repeat':'no-repeat'});
$('#left').html(counter--);
if(counter<0){
 $('#left').text("Great Job!");
 $('#container').css({'opacity':'0','transition':'3s'});
$('#timer').attr('id', 'win');
$('#win').html("You found all the elements!");
$('.forward').show();
$('.forward').css({'opacity':'1','transition':'3s'});
$('.instructions2').show();
$('#refresh').remove();
}
});

$('#coin').on('click', function(){
move($('#coin'));
sound();
$('#con').css({'text-decoration':'line-through'})
$('#count').css({'transition':'2s','background-image':'url(images/coin.png)', 'background-position':'center', 'background-size':'80%', 'background-repeat':'no-repeat'});
$('#left').html(counter--);
if(counter<0){
 $('#left').text("Great Job!");
 $('#container').css({'opacity':'0','transition':'3s'});
$('#timer').attr('id', 'win');
$('#win').html("You found all the elements!");
$('.forward').show();
$('.forward').css({'opacity':'1','transition':'3s'});
$('.instructions2').show();
$('#refresh').remove();
}
});

$('#snow').on('click', function(){
move($('#snow'));
sound();
$('#snouw').css({'text-decoration':'line-through'})
$('#count').css({'transition':'2s','background-image':'url(images/snowflake.png)', 'background-position':'center', 'background-size':'80%', 'background-repeat':'no-repeat'});
$('#left').html(counter--);
if(counter<0){
 $('#left').text("Great Job!");
 $('#container').css({'opacity':'0','transition':'3s'});
$('#timer').attr('id', 'win');
$('#win').html("You found all the elements!");
$('.forward').show();
$('.forward').css({'opacity':'1','transition':'3s'});
$('.instructions2').show();
$('#refresh').remove();
}
});

$('#fork').on('click', function(){
move($('#fork'));
sound();
$('#forck').css({'text-decoration':'line-through'})
$('#count').css({'transition':'2s','background-image':'url(images/fork.png)', 'background-position':'center', 'background-size':'60%', 'background-repeat':'no-repeat'});
$('#left').html(counter--);
if(counter<0){
 $('#left').text("Great Job!");
 $('#container').css({'opacity':'0','transition':'3s'});
$('#timer').attr('id', 'win');
$('#win').html("You found all the elements!");
$('.forward').show();
$('.forward').css({'opacity':'1','transition':'3s'});
$('.instructions2').show();
$('#refresh').remove();
}
});

$('#feather').on('click', function(){
move($('#feather'));
sound();
$('#feathr').css({'text-decoration':'line-through'})
$('#count').css({'transition':'2s','background-image':'url(images/feather.png)', 'background-position':'center', 'background-size':'80%', 'background-repeat':'no-repeat'});
$('#left').html(counter--);
if(counter<0){
 $('#left').text("Great Job!");
 $('#container').css({'opacity':'0','transition':'3s'});
$('#timer').attr('id', 'win');
$('#win').html("You found all the elements!");
$('.forward').show();
$('.forward').css({'opacity':'1','transition':'3s'});
$('.instructions2').show();
$('#refresh').remove();
}
});

$('#axe').on('click', function(){
move($('#axe'));
sound();
$('#ax').css({'text-decoration':'line-through'})
$('#count').css({'transition':'2s','background-image':'url(images/axe.png)', 'background-position':'center', 'background-size':'80%', 'background-repeat':'no-repeat'});
$('#left').html(counter--);
if(counter<0){
 $('#left').text("Great Job!");
 $('#container').css({'opacity':'0','transition':'3s'});
$('#timer').attr('id', 'win');
$('#win').html("You found all the elements!");
$('.forward').show();
$('.forward').css({'opacity':'1','transition':'3s'});
$('.instructions2').show();
$('#refresh').remove();
}
});

$('#apple').on('click', function(){
move($('#apple'));
sound();
$('#appl').css({'text-decoration':'line-through'})
$('#count').css({'transition':'2s','background-image':'url(images/apple.png)', 'background-position':'center', 'background-size':'80%', 'background-repeat':'no-repeat'});
$('#left').html(counter--);
if(counter<0){
 $('#left').text("Great Job!");
 $('#container').css({'opacity':'0','transition':'3s'});
$('#timer').attr('id', 'win');
$('#win').html("You found all the elements!");
$('.forward').show();
$('.forward').css({'opacity':'1','transition':'3s'});
$('.instructions2').show();
$('#refresh').remove();
}
});

$('#book').on('click', function(){
move($('#book'));
sound();
$('#buk').css({'text-decoration':'line-through'})
$('#count').css({'transition':'2s','background-image':'url(images/book.png)', 'background-position':'center', 'background-size':'80%', 'background-repeat':'no-repeat'});
$('#left').html(counter--);
if(counter<0){
 $('#left').text("Great Job!");
 $('#container').css({'opacity':'0','transition':'3s'});
$('#timer').attr('id', 'win');
$('#win').html("You found all the elements!");
$('.forward').show();
$('.forward').css({'opacity':'1','transition':'3s'});
$('.instructions2').show();
$('#refresh').remove();
}
});

$('#knife').on('click', function(){
move($('#knife'));
sound();
$('#knif').css({'text-decoration':'line-through'})
$('#count').css({'transition':'2s','background-image':'url(images/knife.png)', 'background-position':'center', 'background-size':'80%', 'background-repeat':'no-repeat'});
$('#left').html(counter--);
if(counter<0){
 $('#left').text("Great Job!");
 $('#container').css({'opacity':'0','transition':'3s'});
$('#timer').attr('id', 'win');
$('#win').html("You found all the elements!");
$('.forward').show();
$('.forward').css({'opacity':'1','transition':'3s'});
$('.instructions2').show();
$('#refresh').remove();
}
});
}
all();


//-------------------------------------
count=11;
$('#left2').html(12);

function moveTwo(e){
e.css({'opacity':'1','transition':'0.1s', 'transform':'rotate(360deg)'});
e.css({'top':'38%','left':'94%','transition':'3s'});
};


function allTwo(){

$('#candlestick').on('click', function(){
moveTwo($('#candlestick'));
sound();
$('#count2').css({'transition':'2s','background-image':'url(images/candlestick.png)', 'background-position':'center', 'background-size':'80%', 'background-repeat':'no-repeat'});
$('#candlestck').css({'text-decoration':'line-through'})
$('#left2').html(count--);
if(count<0){
 $('#left2').text("Great Job!");
 $('#container').css({'opacity':'0','transition':'3s'});
$('#timer2').attr('id', 'win');
$('#win').html("You found all the elements!");
$('.forward2').show();
$('.forward2').css({'opacity':'1','transition':'3s'});
$('.instructions2').show();
$('#refresh').remove();
}
});

$('#key').on('click', function(){
moveTwo($('#key'));
sound();
$('#kee').css({'text-decoration':'line-through'})
$('#count2').css({'transition':'2s','background-image':'url(images/key.png)', 'background-position':'center', 'background-size':'55%', 'background-repeat':'no-repeat'});
$('#left2').html(count--);
if(count<0){
 $('#left2').text("Great Job!");
 $('#container').css({'opacity':'0','transition':'3s'});
$('#timer2').attr('id', 'win');
$('#win').html("You found all the elements!");
$('.forward2').show();
$('.forward2').css({'opacity':'1','transition':'3s'});
$('.instructions2').show();
$('#refresh').remove();
}
});

$('#snake').on('click', function(){
moveTwo($('#snake'));
sound();
$('#snak').css({'text-decoration':'line-through'})
$('#count2').css({'transition':'2s','background-image':'url(images/snake.png)', 'background-position':'center', 'background-size':'80%', 'background-repeat':'no-repeat'});
$('#left2').html(count--);
if(count<0){
 $('#left2').text("Great Job!");
 $('#container').css({'opacity':'0','transition':'3s'});
$('#timer2').attr('id', 'win');
$('#win').html("You found all the elements!");
$('.forward2').show();
$('.forward2').css({'opacity':'1','transition':'3s'});
$('.instructions2').show();
$('#refresh').remove();
}
});

$('#pitcher').on('click', function(){
moveTwo($('#pitcher'));
sound();
$('#ptchr').css({'text-decoration':'line-through'})
$('#count2').css({'transition':'2s','background-image':'url(images/pitcher.png)', 'background-position':'center', 'background-size':'80%', 'background-repeat':'no-repeat'});
$('#left2').html(count--);
if(count<0){
 $('#left2').text("Great Job!");
 $('#container').css({'opacity':'0','transition':'3s'});
$('#timer2').attr('id', 'win');
$('#win').html("You found all the elements!");
$('.forward2').show();
$('.forward2').css({'opacity':'1','transition':'3s'});
$('.instructions2').show();
$('#refresh').remove();
}
});

$('#sword').on('click', function(){
moveTwo($('#sword'));
sound();
$('#swrd').css({'text-decoration':'line-through'})
$('#count2').css({'transition':'2s','background-image':'url(images/sword.png)', 'background-position':'center', 'background-size':'80%', 'background-repeat':'no-repeat'});
$('#left2').html(count--);
if(count<0){
 $('#left2').text("Great Job!");
 $('#container').css({'opacity':'0','transition':'3s'});
$('#timer2').attr('id', 'win');
$('#win').html("You found all the elements!");
$('.forward2').show();
$('.forward2').css({'opacity':'1','transition':'3s'});
$('.instructions2').show();
$('#refresh').remove();
}
});

$('#crown').on('click', function(){
moveTwo($('#crown'));
sound();
$('#shild').css({'text-decoration':'line-through'})
$('#count2').css({'transition':'2s','background-image':'url(images/crown.png)', 'background-position':'center', 'background-size':'80%', 'background-repeat':'no-repeat'});
$('#left2').html(count--);
if(count<0){
 $('#left2').text("Great Job!");
 $('#container').css({'opacity':'0','transition':'3s'});
$('#timer2').attr('id', 'win');
$('#win').html("You found all the elements!");
$('.forward2').show();
$('.forward2').css({'opacity':'1','transition':'3s'});
$('.instructions2').show();
$('#refresh').remove();
}
});

$('#hat').on('click', function(){
moveTwo($('#hat'));
sound();
$('#ht').css({'text-decoration':'line-through'})
$('#count2').css({'transition':'2s','background-image':'url(images/hat.png)', 'background-position':'center', 'background-size':'60%', 'background-repeat':'no-repeat'});
$('#left2').html(count--);
if(count<0){
 $('#left2').text("Great Job!");
 $('#container').css({'opacity':'0','transition':'3s'});
$('#timer2').attr('id', 'win');
$('#win').html("You found all the elements!");
$('.forward2').show();
$('.forward2').css({'opacity':'1','transition':'3s'});
$('.instructions2').show();
$('#refresh').remove();
}
});

$('#cross').on('click', function(){
moveTwo($('#cross'));
sound();
$('#cros').css({'text-decoration':'line-through'})
$('#count2').css({'transition':'2s','background-image':'url(images/cross.png)', 'background-position':'center', 'background-size':'80%', 'background-repeat':'no-repeat'});
$('#left2').html(count--);
if(count<0){
 $('#left2').text("Great Job!");
 $('#container').css({'opacity':'0','transition':'3s'});
$('#timer2').attr('id', 'win');
$('#win').html("You found all the elements!");
$('.forward2').show();
$('.forward2').css({'opacity':'1','transition':'3s'});
$('.instructions2').show();
$('#refresh').remove();
}
});

$('#raven').on('click', function(){
moveTwo($('#raven'));
sound();
$('#ravn').css({'text-decoration':'line-through'})
$('#count2').css({'transition':'2s','background-image':'url(images/raven.png)', 'background-position':'center', 'background-size':'80%', 'background-repeat':'no-repeat'});
$('#left2').html(count--);
if(count<0){
 $('#left2').text("Great Job!");
 $('#container').css({'opacity':'0','transition':'3s'});
$('#timer2').attr('id', 'win');
$('#win').html("You found all the elements!");
$('.forward2').show();
$('.forward2').css({'opacity':'1','transition':'3s'});
$('.instructions2').show();
$('#refresh').remove();
}
});

$('#telescope').on('click', function(){
moveTwo($('#telescope'));
sound();
$('#tscope').css({'text-decoration':'line-through'})
$('#count2').css({'transition':'2s','background-image':'url(images/telescope.png)', 'background-position':'center', 'background-size':'80%', 'background-repeat':'no-repeat'});
$('#left2').html(count--);
if(count<0){
 $('#left2').text("Great Job!");
 $('#container').css({'opacity':'0','transition':'3s'});
$('#timer2').attr('id', 'win');
$('#win').html("You found all the elements!");
$('.forward2').show();
$('.forward2').css({'opacity':'1','transition':'3s'});
$('.instructions2').show();
$('#refresh').remove();
}
});

$('#gem').on('click', function(){
moveTwo($('#gem'));
sound();
$('#gm').css({'text-decoration':'line-through'})
$('#count2').css({'transition':'2s','background-image':'url(images/gem.png)', 'background-position':'center', 'background-size':'80%', 'background-repeat':'no-repeat'});
$('#left2').html(count--);
if(count<0){
 $('#left2').text("Great Job!");
 $('#container').css({'opacity':'0','transition':'3s'});
$('#timer2').attr('id', 'win');
$('#win').html("You found all the elements!");
$('.forward2').show();
$('.forward2').css({'opacity':'1','transition':'3s'});
$('.instructions2').show();
$('#refresh').remove();
}
});

$('#broom').on('click', function(){
moveTwo($('#broom'));
sound();
$('#brum').css({'text-decoration':'line-through'})
$('#count2').css({'transition':'2s','background-image':'url(images/broom.png)', 'background-position':'center', 'background-size':'80%', 'background-repeat':'no-repeat'});
$('#left2').html(count--);
if(count<0){
 $('#left2').text("Great Job!");
 $('#container').css({'opacity':'0','transition':'3s'});
$('#timer2').attr('id', 'win');
$('#win').html("You found all the elements!");
$('.forward2').show();
$('.forward2').css({'opacity':'1','transition':'3s'});
$('.instructions2').show();
$('#refresh').remove();
}
});
}
allTwo();

function moveStarsDown(){
$('.shine').css({'animation':'none'});
$('#one').css({'left':'18%','top':'-10%','transition':'4s'});
$('#two').css({'left':'18%','top':'-10%','transition':'4s'});
$('#three').css({'left':'10%','top':'-10%','transition':'4s'});
$('#four').css({'left':'33%','top':'-10%','transition':'4s'});
$('#five').css({'left':'45%','top':'-10%','transition':'4s'});
$('#six').css({'left':'80%','top':'-10%','transition':'4s'});
$('#seven').css({'left':'70%','top':'-10%','transition':'4s'});
$('#eight').css({'left':'85%','top':'-10%','transition':'4s'});
$('#nine').css({'left':'90%','top':'-10%','transition':'4s'});
$('#ten').css({'left':'20%','top':'-10%','transition':'4s'});
}



$('#not').on('click', function(){
 $('.instructions1').css({'display':'none'});
 moveStarsDown($('.shine'));
 $('.instructions2').show();
 $('.forward3').show();
 $('.forward3').css({'opacity':'1','transition':'4s'});
$('#refresh3').show();
$('#refresh3').css({'opacity':'1','transition':'4s'});
});


$('#game3').on('click', function(){
$('.instructions1').css({'display':'none'});

function moveStars(e){
$('#one').css('top', Math.random()*window.innerHeight);
$('#one').css('left', Math.random()*window.innerWidth);
$('#two').css('top', Math.random()*window.innerHeight);
$('#two').css('left', Math.random()*window.innerWidth);
$('#three').css('top', Math.random()*window.innerHeight);
$('#three').css('left', Math.random()*window.innerWidth);
$('#four').css('top', Math.random()*window.innerHeight);
$('#four').css('left', Math.random()*window.innerWidth);
$('#five').css('top', Math.random()*window.innerHeight);
$('#five').css('left', Math.random()*window.innerWidth);
$('#six').css('top', Math.random()*window.innerHeight);
$('#six').css('left', Math.random()*window.innerWidth);
$('#seven').css('top', Math.random()*window.innerHeight);
$('#seven').css('left', Math.random()*window.innerWidth);
$('#eight').css('top', Math.random()*window.innerHeight);
$('#eight').css('left', Math.random()*window.innerWidth);
$('#nine').css('top', Math.random()*window.innerHeight);
$('#nine').css('left', Math.random()*window.innerWidth);
$('#ten').css('top', Math.random()*window.innerHeight);
$('#ten').css('left', Math.random()*window.innerWidth);
$('#one').css({'transition':'1s'});

$('#two').css({'transition':'1s'});

$('#three').css({'transition':'1s'});

$('#four').css({'transition':'1s'});

$('#five').css({'transition':'1s'});

$('#six').css({'transition':'1s'});

$('#seven').css({'transition':'1s'});

$('#eight').css({'transition':'1s'});

$('#nine').css({'transition':'1s'});

$('#ten').css({'transition':'1s'});

};
//moveStars();//Fires when page loads, give the duck random startin position
setInterval(moveStars,Math.random()*5000);

$('#one').on('click', function(){
//$('#one').css({'top':'90%','left':'60','transition':'1s', 'box-shadow':'0 0 10px white', 'border-radius':'50%'});
sound();
});


$('#two').on('click', function(){
$('#two').css({'top':'90%','left':'60','transition':'1s', 'box-shadow':'0 0 10px white', 'border-radius':'50%'});
sound();
});


$('#three').on('click', function(){
$('#three').css({'top':'90%','left':'60','transition':'1s', 'box-shadow':'0 0 10px white', 'border-radius':'50%'});
sound();
});


$('#four').on('click', function(){
$('#four').css({'top':'90%','left':'60','transition':'1s', 'box-shadow':'0 0 10px white', 'border-radius':'50%'});
sound();
});


$('#five').on('click', function(){
$('#five').css({'top':'90%','left':'60','transition':'1s', 'box-shadow':'0 0 10px white', 'border-radius':'50%'});
sound();
});


$('#six').on('click', function(){
$('#six').css({'top':'90%','left':'60','transition':'1s', 'box-shadow':'0 0 10px white', 'border-radius':'50%'});
sound();
});


$('#seven').on('click', function(){
$('#seven').css({'top':'90%','left':'60','transition':'1s', 'box-shadow':'0 0 10px white', 'border-radius':'50%'});
sound();
});


$('#eight').on('click', function(){
$('#eight').css({'top':'90%','left':'60','transition':'1s', 'box-shadow':'0 0 10px white', 'border-radius':'50%'});
sound();
});


$('#nine').on('click', function(){
$('#nine').css({'top':'90%','left':'60','transition':'1s', 'box-shadow':'0 0 10px white', 'border-radius':'50%'});
sound();
});
$('#ten').on('click', function(){
$('#ten').css({'top':'90%','left':'60','transition':'1s', 'box-shadow':'0 0 10px white', 'border-radius':'50%'});
sound();
});

});




});
