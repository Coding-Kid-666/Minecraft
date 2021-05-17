

var canvas = new fabric.Canvas("myCanvas");
var player_X = 10;
var player_Y = 10;
var playerObj = "";
var blockImgObj = "";
var blockWidth = 30;
var blockHeight = 30;

function plr_update(){
    fabric.Image.fromURL("player.png", function(Img){
        playerObj = Img;
        playerObj.scaleToWidth(150);
        playerObj.scaleToHeight(140);
        playerObj.set({
            top:player_Y,
            left:player_X
        });
        canvas.add(playerObj);
    })
}

function newImg(getImage){
    fabric.Image.fromURL(getImage, function(Img){
        blockImgObj = Img;
        blockImgObj.scaleToWidth(blockWidth);
        blockImgObj.scaleToHeight(blockHeight);
        blockImgObj.set({
            top:player_Y,
            left:player_X
        });
        canvas.add(blockImgObj);
    })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);

    if(e.shiftKey == true && keypressed == 80){
        console.log("keypress = p+shift");
        blockWidth = blockWidth + 10;
        blockHeight = blockHeight + 10;
        document.getElementById("current_width").innerHTML = blockWidth;
        document.getElementById("current_height").innerHTML = blockHeight;
    }
    if(e.shiftKey == true && keypressed == 77){
        console.log("keypress = m+shift");
        blockWidth = blockWidth - 10;
        blockHeight = blockHeight - 10;
        document.getElementById("current_width").innerHTML = blockWidth;
        document.getElementById("current_height").innerHTML = blockHeight;
    }
    if(keypressed == 37){
        left();
        console.log("left");
    }
    if(keypressed == 38){
        up();
        console.log("up");
    }
    if(keypressed == 39){
        right();
        console.log("right");
    }
    if(keypressed == 40){
        down();
        console.log("down");
    }
    if(keypressed == 87){
        newImg("wall.jpg");
        console.log("w");
    }
    if(keypressed == 71){
        newImg("ground.png");
        console.log("g");
    }
    if(keypressed == 76){
        newImg("light_green.png");
        console.log("l");
    }
    if(keypressed == 68){
        newImg("dark_green.png");
        console.log("d");
    }
    if(keypressed == 67){
        newImg("cloud.jpg");
        console.log("c");
    }
    if(keypressed == 84){
        newImg("trunk.jpg");
        console.log("t");
    }
    if(keypressed == 82){
        newImg("roof.jpg");
        console.log("r");
    }
    if(keypressed == 89){
        newImg("yellow_wall.png");
        console.log("y");
    }
    if(keypressed == 85){
        newImg("unique.png");
        console.log("u");
    }
    if(keypressed == 88){
        newImg("clear.jpg");
        console.log("x");
    }
}

function left(){
    if(player_X > 0){
        player_X = player_X - blockWidth;
        console.log("The block width is " + blockWidth);
        console.log("When Left is pressed... X = "+player_X+" Y = "+player_Y);
        canvas.remove(playerObj);
        plr_update();
    }
}
function up(){
    if(player_Y > 0){
        player_Y = player_Y - blockHeight;
        console.log("The block height is " + blockHeight);
        console.log("When up is pressed... X = "+player_X+" Y = "+player_Y);
        canvas.remove(playerObj);
        plr_update();
    }
}
function right(){
    if(player_X <= 850){
        player_X = player_X + blockWidth;
        console.log("The block width is " + blockWidth);
        console.log("When Right is pressed... X = "+player_X+" Y = "+player_Y);
        canvas.remove(playerObj);
        plr_update();
    }
}
function down(){
    if(player_Y <= 500){
        player_Y = player_Y + blockHeight;
        console.log("The block height is " + blockHeight);
        console.log("When Down is pressed... X = "+player_X+" Y = "+player_Y);
        canvas.remove(playerObj);
        plr_update();
    }
}

