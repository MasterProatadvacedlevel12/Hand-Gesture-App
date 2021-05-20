Webcam.set({
    width: 300,
    height: 300,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function Capture()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capturedimage" src="'+data_uri+'">';
    });
}

console.log(ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/iCZetw_ky/model.json", loaded);

function loaded()
{
    console.log("model loaded");
}


prediction_1 = "";
prediction_2= "";


function speak()
{
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is"+prediction_1;
    speak_data_2 = "The second prediction is"+prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis);
}