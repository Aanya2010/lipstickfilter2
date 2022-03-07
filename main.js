function preload() {

}

function setup() {
    canvas=createCanvas(300, 300);
    canvas.center();
 video=createCapture(VIDEO);
 video.size(300, 300);
 video.hide();

 posenet=ml5.poseNet(video, modelloaded);
 posenet.on('pose', gotpose);
}
function draw() {
    image(video, 0, 0, 300, 300);
}

function snap() {
    save('filterpic.png');
    
}

function modelloaded() {
    console.log("model is here bro")
}

function gotpose(results) {
    if(results.length>0) {
        console.log(results)
    }
}