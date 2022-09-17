lipsX=0;
lipsY=0;

function preload()
{
  lipstick =  loadImage(' https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup()
{
canvas=createCanvas(300,300);
canvas.center();
video= createCapture(VIDEO);
video.size (300,300);
video.hide();
tint_color = "yellow";

posenet = ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log("posenet is initialized");
}
function gotPoses(results)
{
    if(results.length >0)
{
  console.log(results);
  lipsX = results[0].pose.lips.x;
lipsY = results[0].pose.lips.y;
console.log("x= " + lipsX);
console.log("y=" + lipsY);
}
}
function draw()
{
  image(video, 0,0, 300,300);
  tint(tint_color);

}
function takesnapshot() 
{
    save("filterimage.png");
}