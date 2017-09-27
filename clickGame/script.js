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
  $('.element').css({'transition':'10s','opacity':'0.4'});
  $('.all2').show();
  $('.all2').css({'transition':'4s','opacity':'0.4'});
  $('#container2').css({'transition':'10s','opacity':'0.4'});
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
e.css({'top':'44%','left':'04%','transition':'3s'})
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



//---Fairy Section ---

function moveStarsDown(e){
e.css({'left':'50%','top':'-10%','transition':'4s'});
}

function moveMove(){

function moveStars(){
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

setInterval(moveStars,Math.random()*3000);
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



var countStars = 10;
function fairy(){

$('#game3').on('click', function(){
$('.instructions1').css({'display':'none'});
moveMove();

$('#one').on('click', function(){
sound();
$('#one').css('opacity','0');
$('#one').removeAttr('id');
countStars--;
console.log(countStars);
if(countStars<=0){
$('.shine').css({'opacity':'1','top':'50%','left':'50%','transition':'1s'});
$('#fairy').show();
$('#magic_flower').show();
$('#magic_flower').css({'-webkit-transform':'scale(3)','opacity':'1','transition':'7s'});
$('#fairy').css({'-webkit-transform':'scale(7)','opacity':'1','transition':'7s'});
$('#container3').css({'opacity':'0','transition':'7s'});
$(".fairy_mssg").show();
}
});

$('#two').on('click', function(){
sound();
$('#two').css('opacity','0');
$('#two').removeAttr('id');
countStars--;
console.log(countStars);
if(countStars<=0){
$('.shine').css({'opacity':'1','top':'50%','left':'50%','transition':'1s'});
$('#fairy').show();
$('#magic_flower').show();
$('#magic_flower').css({'-webkit-transform':'scale(3)','opacity':'1','transition':'7s'});
$('#fairy').css({'-webkit-transform':'scale(7)','opacity':'1','transition':'7s'});
$('#container3').css({'opacity':'0','transition':'7s'});
$(".fairy_mssg").show();
}
});

$('#three').on('click', function(){
sound();
$('#three').css('opacity','0');
$('#three').removeAttr('id');
countStars--;
console.log(countStars);
if(countStars<=0){
$('.shine').css({'opacity':'1','top':'50%','left':'50%','transition':'1s'});
$('#fairy').show();
$('#magic_flower').show();
$('#magic_flower').css({'-webkit-transform':'scale(3)','opacity':'1','transition':'7s'});
$('#fairy').css({'-webkit-transform':'scale(7)','opacity':'1','transition':'7s'});
$('#container3').css({'opacity':'0','transition':'7s'});
$(".fairy_mssg").show();
}
});

$('#four').on('click', function(){
sound();
$('#four').css('opacity','0');
$('#four').removeAttr('id');
countStars--;
console.log(countStars);
if(countStars<=0){
$('.shine').css({'opacity':'1','top':'50%','left':'50%','transition':'1s'});
$('#fairy').show();
$('#magic_flower').show();
$('#magic_flower').css({'-webkit-transform':'scale(3)','opacity':'1','transition':'7s'});
$('#fairy').css({'-webkit-transform':'scale(7)','opacity':'1','transition':'7s'});
$('#container3').css({'opacity':'0','transition':'7s'});
$(".fairy_mssg").show();
}
});

$('#five').on('click', function(){
sound();
$('#five').css('opacity','0');
$('#five').removeAttr('id');
countStars--;
console.log(countStars);
if(countStars<=0){
$('.shine').css({'opacity':'1','top':'50%','left':'50%','transition':'1s'});
$('#fairy').show();
$('#magic_flower').show();
$('#magic_flower').css({'-webkit-transform':'scale(3)','opacity':'1','transition':'7s'});
$('#fairy').css({'-webkit-transform':'scale(7)','opacity':'1','transition':'7s'});
$('#container3').css({'opacity':'0','transition':'7s'});
$(".fairy_mssg").show();
}
});

$('#six').on('click', function(){
sound();
$('#six').css('opacity','0');
$('#six').removeAttr('id');
countStars--;
console.log(countStars);
if(countStars<=0){
$('.shine').css({'opacity':'1','top':'50%','left':'50%','transition':'1s'});
$('#fairy').show();
$('#magic_flower').show();
$('#magic_flower').css({'-webkit-transform':'scale(3)','opacity':'1','transition':'7s'});
$('#fairy').css({'-webkit-transform':'scale(7)','opacity':'1','transition':'7s'});
$('#container3').css({'opacity':'0','transition':'7s'});
$(".fairy_mssg").show();
}
});

$('#seven').on('click', function(){
sound();
$('#seven').css('opacity','0');
$('#seven').removeAttr('id');
countStars--;
console.log(countStars);
if(countStars<=0){
$('.shine').css({'opacity':'1','top':'50%','left':'50%','transition':'1s'});
$('#fairy').show();
$('#magic_flower').show();
$('#magic_flower').css({'-webkit-transform':'scale(3)','opacity':'1','transition':'7s'});
$('#fairy').css({'-webkit-transform':'scale(7)','opacity':'1','transition':'7s'});
$('#container3').css({'opacity':'0','transition':'7s'});
$(".fairy_mssg").show();
}
});

$('#eight').on('click', function(){
sound();
$('#eight').css('opacity','0');
$('#eight').removeAttr('id');
countStars--;
console.log(countStars);
if(countStars<=0){
$('.shine').css({'opacity':'1','top':'50%','left':'50%','transition':'1s'});
$('#fairy').show();
$('#magic_flower').show();
$('#magic_flower').css({'-webkit-transform':'scale(3)','opacity':'1','transition':'7s'});
$('#fairy').css({'-webkit-transform':'scale(7)','opacity':'1','transition':'7s'});
$('#container3').css({'opacity':'0','transition':'7s'});
$(".fairy_mssg").show();
}
});

$('#nine').on('click', function(){
sound();
$('#nine').css('opacity','0');
$('#nine').removeAttr('id');
countStars--;
console.log(countStars);
if(countStars<=0){
$('.shine').css({'opacity':'1','top':'50%','left':'50%','transition':'1s'});
$('#fairy').show();
$('#magic_flower').show();
$('#magic_flower').css({'-webkit-transform':'scale(3)','opacity':'1','transition':'7s'});
$('#fairy').css({'-webkit-transform':'scale(7)','opacity':'1','transition':'7s'});
$('#container3').css({'opacity':'0','transition':'7s'});
$(".fairy_mssg").show();
}
});

$('#ten').on('click', function(){
sound();
$('#ten').css('opacity','0');
$('#ten').removeAttr('id');
countStars--;
console.log(countStars);
if(countStars<=0){
$('.shine').css({'opacity':'1','top':'50%','left':'50%','transition':'1s'});
$('#fairy').show();
$('#magic_flower').show();
$('#magic_flower').css({'-webkit-transform':'scale(3)','opacity':'1','transition':'7s'});
$('#fairy').css({'-webkit-transform':'scale(7)','opacity':'1','transition':'7s'});
$('#container3').css({'opacity':'0','transition':'7s'});
$(".fairy_mssg").show();
}
});

});
}
fairy()


//--- Buterflies ---

$('#magic_flower').on('click', function(){
$('.shine').remove();
$('#fairy').css({'opacity':'0','transition':'4s'});
$(".fairy_mssg").css({'opacity':'0','transition':'4s'});
$('.all3').show();
$('.all3').css({'opacity':'0.4','transition':'7s'});
$('.side_info').css({'transition':'4s','width':'120px'});
$('.presentation').remove();
$('.fairy_mssg').remove();
function tick() {
var counter = $('#timer3');
seconds--;
counter.html(seconds);
if( seconds > 0 ) {
    setTimeout(tick, 1000);
  }else if(seconds<=0){
    counter.html("You lose");
    moveTwo($('.all3'));
    $('#refresh').show();
  }
}
tick();

});



var count_butterflies = 10;
$('#left3').html(count_butterflies);

function butterfly(){

$('#pink').on('click', function(){
moveTwo($('#pink'));
sound();
$('#count3').css({'transition':'2s','background-image':'url(images/pink.png)', 'background-position':'center', 'background-size':'80%', 'background-repeat':'no-repeat'});
count_butterflies--;
$('#left3').html(count_butterflies);
if(count_butterflies<=0){
 $('#left3').text("Great Job!");
$('#timer3').attr('id', 'win');
$('#win').html("You found all the elements!");
$('.forward4').show();
$('.forward4').css({'opacity':'1','transition':'3s'});
$('.instructions2').show();
$('.presentation').show();
$('#refresh').remove();
}
});

$('#pink1').on('click', function(){
moveTwo($('#pink1'));
sound();
$('#count3').css({'transition':'2s','background-image':'url(images/pink1.gif)', 'background-position':'center', 'background-size':'80%', 'background-repeat':'no-repeat'});
count_butterflies--;
$('#left3').html(count_butterflies);
if(count_butterflies<=0){
 $('#left3').text("Great Job!");
$('#timer3').attr('id', 'win');
$('#win').html("You found all the elements!");
$('.forward4').show();
$('.forward4').css({'opacity':'1','transition':'3s'});
$('.instructions2').show();
$('.presentation').show();
$('#refresh').remove();
}
});

$('#dark').on('click', function(){
moveTwo($('#dark'));
sound();
$('#count3').css({'transition':'2s','background-image':'url(images/dark.png)', 'background-position':'center', 'background-size':'80%', 'background-repeat':'no-repeat'});
count_butterflies--;
$('#left3').html(count_butterflies);
if(count_butterflies<=0){
 $('#left3').text("Great Job!");
$('#timer3').attr('id', 'win');
$('#win').html("You found all the elements!");
$('.forward4').show();
$('.forward4').css({'opacity':'1','transition':'3s'});
$('.instructions2').show();
$('.presentation').show();
$('#refresh').remove();
}
});

$('#blue').on('click', function(){
moveTwo($('#blue'));
sound();
$('#count3').css({'transition':'2s','background-image':'url(images/blue.png)', 'background-position':'center', 'background-size':'80%', 'background-repeat':'no-repeat'});
count_butterflies--;
$('#left3').html(count_butterflies);
if(count_butterflies<=0){
 $('#left3').text("Great Job!");
$('#timer3').attr('id', 'win');
$('#win').html("You found all the elements!");
$('.forward4').show();
$('.forward4').css({'opacity':'1','transition':'3s'});
$('.instructions2').show();
$('.presentation').show();
$('#refresh').remove();
}
});

$('#orange').on('click', function(){
moveTwo($('#orange'));
sound();
$('#count3').css({'transition':'2s','background-image':'url(images/orange.png)', 'background-position':'center', 'background-size':'80%', 'background-repeat':'no-repeat'});
count_butterflies--;
$('#left3').html(count_butterflies);
if(count_butterflies<=0){
 $('#left3').text("Great Job!");
$('#timer3').attr('id', 'win');
$('#win').html("You found all the elements!");
$('.forward4').show();
$('.forward4').css({'opacity':'1','transition':'3s'});
$('.instructions2').show();
$('.presentation').show();
$('#refresh').remove();
}
});

$('#brown').on('click', function(){
moveTwo($('#brown'));
sound();
$('#count3').css({'transition':'2s','background-image':'url(images/brown.png)', 'background-position':'center', 'background-size':'80%', 'background-repeat':'no-repeat'});
count_butterflies--;
$('#left3').html(count_butterflies);
if(count_butterflies<=0){
 $('#left3').text("Great Job!");
 $('#timer3').attr('id', 'win');
$('#win').html("You found all the elements!");
$('.forward4').show();
$('.forward4').css({'opacity':'1','transition':'3s'});
$('.instructions2').show();
$('.presentation').show();
$('#refresh').remove();
}
});

$('#multicolor').on('click', function(){
moveTwo($('#multicolor'));
sound();
$('#count3').css({'transition':'2s','background-image':'url(images/multicolor.png)', 'background-position':'center', 'background-size':'80%', 'background-repeat':'no-repeat'});
count_butterflies--;
$('#left3').html(count_butterflies);
if(count_butterflies<=0){
 $('#left3').text("Great Job!");
$('#timer3').attr('id', 'win');
$('#win').html("You found all the elements!");
$('.forward4').show();
$('.forward4').css({'opacity':'1','transition':'3s'});
$('.instructions2').show();
$('.presentation').show();
$('#refresh').remove();
}
});

$('#purple').on('click', function(){
moveTwo($('#purple'));
sound();
$('#count3').css({'transition':'2s','background-image':'url(images/purple.png)', 'background-position':'center', 'background-size':'80%', 'background-repeat':'no-repeat'});
count_butterflies--;
$('#left3').html(count_butterflies);
if(count_butterflies<=0){
 $('#left3').text("Great Job!");
$('#timer3').attr('id', 'win');
$('#win').html("You found all the elements!");
$('.forward4').show();
$('.forward4').css({'opacity':'1','transition':'3s'});
$('.instructions2').show();
$('.presentation').show();
$('#refresh').remove();
}
});

$('#yellow').on('click', function(){
moveTwo($('#yellow'));
sound();
$('#count3').css({'transition':'2s','background-image':'url(images/yellow.png)', 'background-position':'center', 'background-size':'80%', 'background-repeat':'no-repeat'});
count_butterflies--;
$('#left3').html(count_butterflies);
if(count_butterflies<=0){
 $('#left3').text("Great Job!");
$('#timer3').attr('id', 'win');
$('#win').html("You found all the elements!");
$('.forward4').show();
$('.forward4').css({'opacity':'1','transition':'3s'});
$('.instructions2').show();
$('.presentation').show();
$('#refresh').remove();
}
});

$('#green').on('click', function(){
moveTwo($('#green'));
sound();
$('#count3').css({'transition':'2s','background-image':'url(images/green.png)', 'background-position':'center', 'background-size':'80%', 'background-repeat':'no-repeat'});
count_butterflies--;
$('#left3').html(count_butterflies);
if(count_butterflies<=0){
 $('#left3').text("Great Job!");
$('#timer3').attr('id', 'win');
$('#win').html("You found all the elements!");
$('.forward4').show();
$('.forward4').css({'opacity':'1','transition':'3s'});
$('.instructions2').show();
$('#refresh').remove();
}
});

}
butterfly();


//--- Ocean ---

var cards=[$('#uno'),$('#dos'),$('#tres'),$('#cuatro'),$('#cinco'),$('#seis'),$('#siete'),$('#ocho'),$('#nueve'),$('#diez'),$('#once'),$('#doce')];
var classes=['fish1','fish2','fish3','fish4','fish5','fish6'];
var name_attr=['']
var cardsInPlay = [];

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
 cards[0].attr('class',array[0]);
 cards[1].attr('class',array[0]);
 cards[2].attr('class',array[1]);
 cards[3].attr('class',array[1]);
 cards[4].attr('class',array[2]);
 cards[5].attr('class',array[2]);
 cards[6].attr('class',array[3]);
 cards[7].attr('class',array[3]);
 cards[8].attr('class',array[4]);
 cards[9].attr('class',array[4]);
 cards[10].attr('class',array[5]);
 cards[11].attr('class',array[5]);
 }




function inPlay(elem1, elem2){
  if(elem1.attr('class') === elem2.attr('class')){
    elem1.css({'opacity':'0','transition':'3s'});
    elem2.css({'opacity':'0','transition':'3s'});
  cardsInPlay=[];
  }else{
    alert('Nope!');
  elem1.css({'background-image':'none','transition':'3s'});
  elem2.css({'background-image':'none','transition':'3s'});
  cardsInPlay=[];
  }
elem1.html('');
elem2.html('');
}


function mess(){

$('#uno').on('click',function(){
sound()
if(cardsInPlay.length<2){
cardsInPlay.push($('#uno'));
$('#uno').css({'background-image':'url(images/medfish.png'});
inPlay(cardsInPlay[0], cardsInPlay[1]);
}

});
$('#dos').on('click',function(){
sound()
if(cardsInPlay.length<2){
cardsInPlay.push($('#dos'));
$('#dos').css({'background-image':'url(images/medfish.png'});
inPlay(cardsInPlay[0], cardsInPlay[1]);
}

});
$('#tres').on('click',function(){
sound()
if(cardsInPlay.length<2){
cardsInPlay.push($('#tres'));
$('#tres').css({'background-image':'url(images/bluef.png'});
inPlay(cardsInPlay[0], cardsInPlay[1]);
}

});
$('#cuatro').on('click',function(){
sound()
if(cardsInPlay.length<2){
cardsInPlay.push($('#cuatro'));
$('#cuatro').css({'background-image':'url(images/bluef.png'});
inPlay(cardsInPlay[0], cardsInPlay[1]);
}

});
$('#cinco').on('click',function(){
sound()
if(cardsInPlay.length<2){
cardsInPlay.push($('#cinco'));
$('#cinco').css({'background-image':'url(images/otherf.png'});
inPlay(cardsInPlay[0], cardsInPlay[1]);
}

});
$('#seis').on('click',function(){
sound()
if(cardsInPlay.length<2){
cardsInPlay.push($('#seis'));
$('#seis').css({'background-image':'url(images/otherf.png'});
inPlay(cardsInPlay[0], cardsInPlay[1]);
}

});

$('#siete').on('click',function(){
sound()
if(cardsInPlay.length<2){
cardsInPlay.push($('#siete'));
$('#siete').css({'background-image':'url(images/oceanf.png'});
inPlay(cardsInPlay[0], cardsInPlay[1]);
}

});

$('#ocho').on('click',function(){
sound()
if(cardsInPlay.length<2){
cardsInPlay.push($('#ocho'));
$('#ocho').css({'background-image':'url(images/oceanf.png'});
inPlay(cardsInPlay[0], cardsInPlay[1]);
}

});

$('#nueve').on('click',function(){
sound()
if(cardsInPlay.length<2){
cardsInPlay.push($('#nueve'));
$('#nueve').css({'background-image':'url(images/greyf.png'});
inPlay(cardsInPlay[0], cardsInPlay[1]);
}

});

$('#diez').on('click',function(){
sound()
if(cardsInPlay.length<2){
cardsInPlay.push($('#diez'));
$('#diez').css({'background-image':'url(images/greyf.png'});
inPlay(cardsInPlay[0], cardsInPlay[1]);
}

});

$('#once').on('click',function(){
sound()
if(cardsInPlay.length<2){
cardsInPlay.push($('#once'));
$('#once').css({'background-image':'url(images/blackf.png'});
inPlay(cardsInPlay[0], cardsInPlay[1]);
}

});

$('#doce').on('click',function(){
sound()
if(cardsInPlay.length<2){
cardsInPlay.push($('#doce'));
console.log($('#doce').attr('class'))
$('#doce').css({'background-image':'url(images/blackf.png'});
inPlay(cardsInPlay[0], cardsInPlay[1]);
}

});

}
mess();

$('#continues').on('click', function(){
$('#fishes').show();
$('#fishes').css({'opacity':'1', 'transition':'4s'});
$('.matches').css({'opacity':'1', 'transition':'4s'});
$('.instructions').remove();
$('.presentation').remove();
shuffleArray(classes);
});



});
