noseX= 0;
noseY= 0;
function preload(){
lips= loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function draw(){
image(video, 0, 0, 300, 300)
image(lips, noseX, noseY, 25, 25);
}

function setup(){
    canvas= createCanvas(300 , 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    video.size(300 , 300);
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function modelLoaded(){
    console.log("Posenet Is Initialized");
}

function gotposes(results){
    if(results.length >0){
        console.log(results);
        noseX= results[0].pose.nose.x-10;
        noseY= results[0].pose.nose.y+5;
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
    }
}

function take_snapshot(){
    save('FunnyLips.png');
}