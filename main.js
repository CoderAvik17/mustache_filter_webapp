MustacheX = 0;
MustacheY = 0;

function preload()
{
    mustache = loadImage('https://i.postimg.cc/sx7Z7nRp/mustache.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('poseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        MustacheX = results[0].pose.nose.x;
        MustacheY = results[0].pose.nose.y;
        console.log("mustache x = " + MustacheX);
        console.log("mustache y = " + MustacheY);
    }
}

function draw(){

    image(video, 0 ,0 ,300, 300);
    image(mustache, MustacheX, MustacheY, 50, 20);
}

function take_snapshot(){
    save("my_picture.png");
}

