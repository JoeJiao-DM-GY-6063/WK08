// TODO: cp 02, but use video
let mCamera;

function setup(){
    createCanvas(windowWidth, windowHeight);
    mCamera = createCapture(VIDEO);
    mCamera.hide();
}

function draw(){
    background(0);
    image(mCamera,0,0);
}

function mousePressed(){
     print(mCamera.windowWidth)
}