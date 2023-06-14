function setup(){
    canvas = createCanvas(790, 630);
    video = createCapture(VIDEO);
    video.hide();
    canvas.center();
}

function draw(){
    image(video , 50, 50, 640, 480);
}

function tirar(){
    save('img_borda.png'); 
}

function filtro(){
    fill('red');
    ellipse(30, 55, 55, 55);
    ellipse(710, 55, 55, 55);
    ellipse(30, 550, 55, 55);
    ellipse(710, 550, 55, 55);
    fill('orange');
    rect(60, 0, 620, 55);
    rect(0,70, 55, 450);
    rect(55,530, 600, 55);
    rect(690,40, 55, 500);
    //circle
}