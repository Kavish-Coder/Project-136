status="";
function setup() {
    canvas=createCanvas(380,320);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,320);
    video.hide();
}

function draw() {
    image(video,0, 0, 480, 380);
}

function start() {
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input_value=document.getElementById("object").value;
}

function modelLoaded() {
    console.log("Model Loaded!");
    status=true;
}