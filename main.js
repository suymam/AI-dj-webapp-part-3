song_1 = "";
song_2 = "";
leftWirstX = 0;
leftWirstY = 0;
rightWirstX = 0;
rightWirstY = 0;

function preload(){
    song_1 = loadSound("music.mp3");
    song_2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded(){
    console.log("pose NEt has been initialised");
}

function gotPoses(results){
if(results.length>0){
    leftWirstX = results[0].pose.leftWrist.x;
    leftWirstY = results[0].pose.leftWrist.y;
    rightWirstX = results[0].pose.rightWrist.x;
    rightWirstY = results[0].pose.rightWrist.y;


    console.log("Left wrist X = " + leftWirstX + " left wrist y = " + leftWirstY);
    console.log("Right wrist X = " + rightWirstX + " right wrist y = " + rightWirstY);
}
}


function draw(){
    image(video,0,0,600,500);
}

