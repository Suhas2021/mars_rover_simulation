canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");


nasa_array=["Mar_1.jpg","Mars_2.jpg","Mars_3.jpg","Mars_4.jpg"]
random_number=Math.floor(Math.random()*4)

rover_width=100;
rover_height=90;

background_image=nasa_array[random_number];


rover_image="rover.png";


rover_y=10;
rover_x=10;


function add()
{
    background_imageTag = new Image();
    background_imageTag.onload = uploadBackround;

    background_imageTag.src = background_image;

    rover_imageTag = new Image();
    rover_imageTag.onload = uploadrover;

    rover_imageTag.src = rover_image;
}


function uploadBackround()
{
    ctx.drawImage(background_imageTag, 0,0, canvas.width, canvas.height);
}


function uploadrover()
{
    ctx.drawImage(rover_imageTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38' )
    {
        up();
        console.log("up");
    } 

    if(keyPressed == '40' )
    {
        down();
        console.log("down");
    } 

    if(keyPressed == '37' )
    {
        left();
        console.log("left");
    } 

    if(keyPressed == '39' )
    {
        right();
        console.log("right");
    } 
}

function up()
{
    if(rover_y>=0)
    {
        rover_y = rover_y - 10;
        uploadBackround();
        uploadrover();
    }
}


function down(){
    if(rover_y<=500)
    {
        rover_y = rover_y+  10;
        uploadBackround();
        uploadrover();
    }
}


function left(){
    if(rover_x>=0)
    {
        rover_x = rover_x - 10;
        uploadBackround();
        uploadrover();
    }
}


function right(){
    if(rover_x<=700)
    {
        rover_x = rover_x+  10;
        uploadBackround();
        uploadrover();
    }
}