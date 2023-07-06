
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version', ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/0AmIssaPf/model.json',modelLoaded);

function modelLoaded()
{
    console.log('Model has been loaded...');
}

function speak()
{
    var synth=window.speechSynthesis;
    speak_data_1="I live in constantly darkened-distance-lotus-slow-improvement-point-concentrated-dense-group-doubtful-flowing-nectar-dot-friendlier-lotus-tree-family-bed-kalpa-soft-sicta-network-complex-root-bottom-desert- Mildalaghu-laghu-rhythm-kalit-ramaniya-paniya-shalika-balika-karar-vind-galantika-galdela-lavanga-patal-ghanasar-kasturikatisaurabh-medur-laghutar-madhur-shitalatar-salildhara-tadiya-vimal-vilochan-mayukh- The line-spread thirsty travelers and this is just plain dumb because you don't live near me and do I have to tell you the hand meaning? No. Why? Because I hate my job but anyways, the hand meaning that you are showing means "+prediction_1;
    var utterThis=new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}

function check()
{
img=document.getElementById('captured_image');
classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
    console.error(error);
    }
    else
    {
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML=results[0].label;
    prediction_1=results[0].label;
    speak();
    if(results[0].label=="Good")
    {
        document.getElementById("update_emoji").innerHTML="👌";
    }
    if(results[0].label=="Peace")
    {
        document.getElementById("update_emoji").innerHTML="✌️";
    }
    if(results[0].label=="Stop")
    {
        document.getElementById("update_emoji").innerHTML="✋";
    }
    }
}