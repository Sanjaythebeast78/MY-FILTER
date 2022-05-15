function  preload() {

}

function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
   Video=createCapture(VIDEO);
   Video.size(300,300) 
   Video.hide()
   poseNet = ml5.poseNet(Video,modelloaded)
   poseNet.on ('pose',gotposes)
}
function draw() {
image(Video,0,0,300,300)
}
function take_snapshot(){
    save("MYFILTER.png")
}
function modelloaded(){
    console.log("Posenet is active")
}
function gotposes(results){
if (results.length>0) {
console.log(results)
console.log("nose x = " + results[0].pose.nose.x)
console.log("nose y = " + results[0].pose.nose.y)
}
}