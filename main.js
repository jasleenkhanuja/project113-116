noseX = 0;
noseY = 0;
function preload(){
    mustache = loadImage('https://i.postimg.cc/J4PZXp5S/mustache.png');
}

function setup(){
 canvas = createCanvas (300,300);
 canvas.center();
 video = createCapture(VIDEO); 
 video.hide();
 video.size(300,300);
 posenet=ml5.poseNet(video,modelLoaded);
 posenet.on('pose',gotPoses);
}

function gotPoses(results){
    if (results.length>0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log('noseX ='+ noseX);
        console.log('noseY ='+ noseY);
    }
}

function modelLoaded(){
console.log("modelloaded");
}

function draw(){
    image(video,0,0,300,300);
    fill(black)
    strock(black)
    circle(noseX,noseY,0,0,300,300)
}

function take_snapshot(){
    save('myFilterImage.png');
}
